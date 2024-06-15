import { useState, useEffect, Suspense, lazy } from "react"
import { useSelector } from "react-redux"
import Loading from '../Components/Loading.jsx';

const CartItem = lazy(() => delayForDemo(import('../Components/CartItem.jsx')));
function delayForDemo(promise) {
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    }).then(() => promise);
  }
const Cart = () => {
    console.log('Cart')
    const [items, setItems] = useState([])
    const [subtotal, setSubtotal] = useState(0)
    const [shippingCost, setShippingCost] = useState(0)
    const cartItems = useSelector((store) => store.cart)
    const numOfItems = cartItems.length;
    const tempItems = []

    useEffect(() => {
        const fetchItems = async () => {
            let subTotalCal = 0;
            for (const cartItem of cartItems) {
                const response = await fetch(`https://dummyjson.com/products/${cartItem.id}`)
                const json = await response.json();
                const disPrice = Number(json.discountPercentage && (json.price - (json.price * json.discountPercentage) / 100) || json.price).toFixed(2)
                tempItems.push({
                    ...json, totalItemPrice: (cartItem.quantity * disPrice), cartItem
                });
                console.log('subtotal cal ', subTotalCal + (cartItem.quantity * disPrice))
                subTotalCal = subTotalCal + (cartItem.quantity * disPrice)
            }
            
            setSubtotal((subTotalCal).toFixed(2))
            tempItems && setItems(tempItems)
        }
        fetchItems()
        setShippingCost(numOfItems * 20)
    }, [cartItems])

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card">
                            <div className="card-body p-4">

                                <div className="row">

                                    <div className="col-lg-7">
                                        <h5 className="mb-3"><a href="#!" className="text-body"><i
                                            className="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                                        <hr />

                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <div>
                                                <p className="mb-1">Shopping cart</p>
                                                <p className="mb-0">You have {numOfItems} items in your cart</p>
                                            </div>
                                            <div>
                                                <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!"
                                                    className="text-body">price <i className="fas fa-angle-down mt-1"></i></a></p>
                                            </div>
                                        </div>
                                        <Suspense fallback={<Loading />}>
                                        { items.map((item, key) => <CartItem key={item.id} item={item} /> ) }
                                        </Suspense>
                                    </div>
                                    <div className="col-lg-5">

                                        <div className="card bg-primary text-white rounded-3">
                                            <div className="card-body">
                                                <div className="d-flex justify-content-between align-items-center mb-4">
                                                    <h5 className="mb-0">Card details</h5>
                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                        className="img-fluid rounded-3" style={{ width: '45px' }} alt="Avatar" />
                                                </div>

                                                <p className="small mb-2">Card type</p>
                                                <a href="#!" type="submit" className="text-white"><i
                                                    className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                                                <a href="#!" type="submit" className="text-white"><i
                                                    className="fab fa-cc-visa fa-2x me-2"></i></a>
                                                <a href="#!" type="submit" className="text-white"><i
                                                    className="fab fa-cc-amex fa-2x me-2"></i></a>
                                                <a href="#!" type="submit" className="text-white"><i className="fab fa-cc-paypal fa-2x"></i></a>

                                                <form className="mt-4">
                                                    <div data-mdb-input-init className="form-outline form-white mb-4">
                                                        <input type="text" id="typeName" className="form-control form-control-lg" siez="17"
                                                            placeholder="Cardholder's Name" />
                                                        <label className="form-label" htmlFor="typeName">Cardholder's Name</label>
                                                    </div>

                                                    <div data-mdb-input-init className="form-outline form-white mb-4">
                                                        <input type="text" id="typeText" className="form-control form-control-lg" siez="17"
                                                            placeholder="1234 5678 9012 3457" minLength="19" max="19" />
                                                        <label className="form-label" htmlFor="typeText">Card Number</label>
                                                    </div>

                                                    <div className="row mb-4">
                                                        <div className="col-md-6">
                                                            <div data-mdb-input-init className="form-outline form-white">
                                                                <input type="text" id="typeExp1" className="form-control form-control-lg"
                                                                    placeholder="MM/YYYY" size="7" minLength="7" max="7" />
                                                                <label className="form-label" htmlFor="typeExp1">Expiration</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div data-mdb-input-init className="form-outline form-white">
                                                                <input type="password" id="typeText1" className="form-control form-control-lg"
                                                                    placeholder="&#9679;&#9679;&#9679;" size="1" minLength="3" max="3" />
                                                                <label className="form-label" htmlFor="typeText1">Cvv</label>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </form>

                                                <hr className="my-4" />

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Subtotal</p>
                                                    <p className="mb-2">${subtotal}</p>
                                                </div>

                                                <div className="d-flex justify-content-between">
                                                    <p className="mb-2">Shipping</p>
                                                    <p className="mb-2">${shippingCost}</p>
                                                </div>

                                                <div className="d-flex justify-content-between mb-4">
                                                    <p className="mb-2">Total(Incl. taxes)</p>
                                                    <p className="mb-2">${Number(subtotal) + Number(shippingCost)}</p>
                                                </div>

                                                <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-info btn-block btn-lg">
                                                    <div className="d-flex justify-content-between">
                                                        <span>${Number(subtotal) + Number(shippingCost)}</span>
                                                        <span>Checkout <i className="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Cart