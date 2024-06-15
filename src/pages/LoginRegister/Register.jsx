import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usersAction } from "../../store/users"

const Register = () => {
    const firstNameRef = useRef('')
    const lastNameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const users = useSelector((store) => store.users)
    console.log('users', users)

    const saveUser = (e) => {
        e.preventDefault()
        const newUser = {
            first_name: firstNameRef.current.value,
            last_name: lastNameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        // console.log({
        //     type: 'ADD_USER',
        //     payload: newUser
        // })
        
        const userExist = (users||[]).some((user) => user.email == newUser.email)

        if(!userExist){
            dispatch(usersAction.register(newUser))
            navigate('/login')
        }
    }

    return (
        <>
            <form id="register" onSubmit={saveUser}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name</label>
                    <input type="text" ref={firstNameRef} className="form-control" id="firstName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name</label>
                    <input type="text" ref={lastNameRef} className="form-control" id="lastName" />
                </div>
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
export default Register