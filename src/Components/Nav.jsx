import { Outlet, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { memo } from "react";
import { loginActions } from "../store/login";

const Nav = memo (function Nav() {
    const user = useSelector((store) => store.login)
    const cart = useSelector((store) => store.cart)
    console.log(user)
    const dispatch = useDispatch()
    const logoutUser = () => {
        console.log(user)
        dispatch(loginActions.logout({email:user.email}))
    }
    return (
        <>
            <div className="container">
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to='/' className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/items' className="nav-link">Items</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/cart' className="nav-link">Cart { cart.length > 0 && <span style={{width:'50px',backgroundColor: '#29fb99', borderRadius:'15px'}}>( { cart.length } )</span>} </Link>
                        </li>
                        {(!(user || {}).first_name) &&
                            <>
                                <li className="nav-item">
                                    <Link to='/login' className="nav-link">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/register' className="nav-link">Register</Link>
                                </li>
                            </>
                        }
                        {((user || {}).first_name) &&
                            <li className="nav-item">
                                <Link to='/profile' className="nav-link">Profile ({user.first_name})</Link>
                            </li>
                        }
                        {((user || {}).first_name) &&
                            <li className="nav-item">
                                <div className="nav-link" onClick={logoutUser}>LogOut</div>
                            </li>
                        }
                        <li className="nav-item">
                        <Link to='/contact-us' className="nav-link">Contact Us</Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </>
    )
})
export default Nav