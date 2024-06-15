import { memo } from "react";
import { useSelector } from "react-redux";
const Profile = memo(() => {
    const user = useSelector((store) => store.login)
    return (
        <>
            <h1>{user.first_name} {user.last_name}</h1>
            <h2>{user.email}</h2>
            <h2>{user.password}</h2>
        </>
    )
})

export default Profile;