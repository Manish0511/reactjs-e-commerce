import { useSelector } from "react-redux";
function Home () {
    console.log('Home')
    const user = useSelector((store) => store.login_user)
    return (
        <>
            <h1>Welcome { }
                {user && user.first_name && <span> {user.first_name} {user.last_name} </span>}
                To eCommerce
            </h1>
        </>
    )
}

export default Home;