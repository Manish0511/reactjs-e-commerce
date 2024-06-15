import { Link } from "react-router-dom"
import Price from "./Price"
import {cartActions} from "../store/cart"
import { useDispatch } from "react-redux"

const CartItem = ({item}) => {
    const dispatch = useDispatch()
    const handleRemoveFromCart = () => {
        dispatch(cartActions.removeFromCart(item.id))
    }
    return (
        <div className="card mb-3">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div className="d-flex flex-row align-items-center">
                        <div>
                            <img
                                src={item.thumbnail}
                                className="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                        </div>
                        <div className="ms-3">
                            <Link to={`/item/${item.id}`}>
                            <h5>{item.title}</h5>
                            </Link>
                            <p className="small mb-0">{item.category}</p>
                        </div>
                    </div>
                    <div className="d-flex flex-row align-items-center">
                        <div style={{ width: '50px' }}>
                            <h5 className="fw-normal mb-0">{item.cartItem.quantity}</h5>
                            <h5 className="fw-normal mb-0">{item.cartItem.size}</h5>
                        </div>
                        <div style={{ width: '80px' }}>
                            <h5 className="mb-0"><Price item={item} /></h5>
                        </div>
                        <div style={{ width: '80px' }}>
                            <h5 className="mb-0">$ {item.totalItemPrice}</h5>
                        </div>
                        <a href="#!" onClick={handleRemoveFromCart} style={{ color: 'red' }}><i className="bi bi-trash-fill"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CartItem