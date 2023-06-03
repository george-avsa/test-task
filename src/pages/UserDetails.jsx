import { useEffect } from "react";
import { User } from "../components/User";
import { fetchPosts, fetchUsersPosts, toggleVisibility } from "../store/usersReducer";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";


export function UserDetials() {
    const user = useSelector(state => state.users);

    const userId = useParams();

    const dispatch = useDispatch();

    const fetchError = useSelector(state => state.settings.fetchError);
    const navigate = useNavigate();

    useEffect(() => {
        if (fetchError) {
            navigate('/404');
        }
    }, [fetchError])

    useEffect(() => {
        try {
            dispatch(fetchPosts(Number.parseInt(userId.id)))
        } catch(e) {
            console.error(e);
        }
    }, [userId]);

    return (
        <div>
            {Object.values(user).length ? <User user={user} id={Number.parseInt(userId.id)} postId={userId.postId} /> :  <Loader />}
            
        </div>
    )
}