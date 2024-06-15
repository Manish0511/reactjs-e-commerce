import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { loginActions } from "../../store/login"

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const users = useSelector((store) => store.users)
    console.log(users)
    const login = (e) => {
        e.preventDefault()
        users.filter((user) => {
            if(emailRef.current.value == user.email &&
                passwordRef.current.value == user.password)
            {
                dispatch(loginActions.login(user))
                navigate('/')
            }
        })
    }
    return (
        <>
            <form id="register" onSubmit={login}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" ref={emailRef} className="form-control" id="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" ref={passwordRef} className="form-control" id="password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
export default Login