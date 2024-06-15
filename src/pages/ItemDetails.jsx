import { useRef, useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import ItemDetailsBottom from "../Components/ItemDetails/ItemDetailsBottom";
import Price from "../Components/Price";
import SelectSize from "../Components/SelectSize";
import QuantitySelect from "../Components/QuantitySelect";
import ItemImageCarousel from "../Components/ItemImageCarousel";
import { useSelector, useDispatch } from "react-redux";
import ToastCustom from "../Components/ItemDetails/ToastCustom";
import {cartActions} from "../store/cart"

function ItemDetails() {
    const { id } = useParams();
    const [item, setItem] = useState({});
    const [show, setShow] = useState(false);
    const quantityRef = useRef();
    const size = useRef('Large');
    const dispatch = useDispatch()
    const carts = useSelector((store) => store.cart)


    const fetchItem = useCallback((id) => {
        fetch(`https://dummyjson.com/products/` + id)
            .then((res) => res.json())
            .then((json) => {
                setItem(json);
            });
    }, [id])
    const increaseQuantity = useCallback(() => {
        quantityRef.current.value = Number(quantityRef.current.value) + 1;
    }, [quantityRef])
    const decreaseQuantity = useCallback(() => {
        if (quantityRef.current.value > 1)
            quantityRef.current.value = Number(quantityRef.current.value) - 1;
    }, [quantityRef])

    const addToCart = useCallback(() => {
        dispatch(cartActions.addToCart({id: id, size: size.current.value, quantity: quantityRef.current.value}))
        // dispatch({
        //     type: 'ADD_CART',
        //     payload:
        //     {
        //         cart: {
        //             id: id, size: size.current.value, quantity: quantityRef.current.value
        //         }
        //     }
        // })
        showHide(true)
    }, [size, quantityRef, id])

    const showHide = (state = show) => {
        setShow(state)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        fetchItem(id);
        quantityRef.current.value = 1;
        size.current.value = 'Large';
        quantityRef.current.value = 1;
    }, [id]);

    return (
        <>
            <ToastCustom showHide={showHide} show={show}></ToastCustom>
            <section className="py-5">
                <div className="container">
                    <div className="row gx-5">
                        <aside className="col-lg-6">
                            <ItemImageCarousel item={item}></ItemImageCarousel>
                        </aside>
                        <main className="col-lg-6">
                            <div className="ps-lg-3">
                                <h4 className="title text-dark">{item.title}</h4>
                                <div className="d-flex flex-row my-3">
                                    <div className="text-warning mb-1 me-2">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fas fa-star-half-alt"></i>
                                        <span className="ms-1">{item.rating}</span>
                                    </div>
                                    <span className="text-muted">
                                        <i className="fas fa-shopping-basket fa-sm mx-1"></i>
                                        {item.stock} orders
                                    </span>
                                    <span className="text-success ms-2">In stock</span>
                                </div>

                                <div className="mb-3">
                                    <span className="h5"><Price item={item}></Price></span>
                                    <span className="text-muted"></span>
                                </div>

                                <p>{item.description}</p>

                                <div className="row">
                                    <dt className="col-3">Category:</dt>
                                    <dd className="col-9">{item.category}</dd>

                                    <dt className="col-3">Color</dt>
                                    <dd className="col-9">Brown</dd>

                                    <dt className="col-3">Material</dt>
                                    <dd className="col-9">Cotton, Jeans</dd>

                                    <dt className="col-3">Brand</dt>
                                    <dd className="col-9">{item.brand}</dd>
                                </div>

                                <hr />

                                <div className="row mb-4">
                                    <div className="col-md-4 col-6">
                                        <SelectSize size={size}></SelectSize>
                                    </div>

                                    <div className="col-md-4 col-6 mb-3">
                                        <QuantitySelect quantityRef={quantityRef} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}></QuantitySelect>
                                    </div>
                                </div>
                                <button className="btn btn-primary shadow-0" onClick={addToCart}>
                                    {" "}
                                    <i className="me-1 fa fa-shopping-basket"></i> Add to cart{" "}
                                </button>
                                <button
                                    className="btn btn-light border border-secondary py-2 icon-hover px-3"
                                >
                                    {" "}
                                    <i className="me-1 fa fa-heart fa-lg"></i> Save{" "}
                                </button>
                            </div>
                        </main>
                    </div>
                </div>
            </section>
            <ItemDetailsBottom></ItemDetailsBottom>
        </>
    );
}
export default ItemDetails;
