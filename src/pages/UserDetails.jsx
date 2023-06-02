import { useEffect } from "react";
import { User } from "../components/User";
import { fetchPosts, fetchUsersPosts, toggleVisibility } from "../store/usersReducer";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";

export function UserDetials() {
    const user = useSelector(state => state.users);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts(3))
    }, []);

    return (
        <div>
            {Object.values(user).length ? <User user={user}></User> :  <Loader />}
            
        </div>
    )
}