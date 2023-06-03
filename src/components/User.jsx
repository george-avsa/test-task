import { Card, Spinner } from "react-bootstrap";
import { getComments, toggleVisibility } from "../store/postReducer";
import { fetchUsersPosts } from "../store/usersReducer";
import { useDispatch } from "react-redux";
import { CommentList } from "./CommentList";
import { useEffect } from "react";
import { Loader } from "./Loader";
import { Link } from "react-router-dom";

export function User({
    user,
    id,
    postId
}) {

    const dispatch = useDispatch();

    function handleUsersPosts() {
        dispatch(toggleVisibility());
        if (!user.posts.length) {
            dispatch(fetchUsersPosts(id));
        }
    }

    return (
        <Card style={{marginLeft: "3em", marginRight: "3em", marginBottom: '3em'}}>
            <Card.Body style={{display: "flex", justifyContent: 'space-between', gap: '100px'}}>
                <div>
                    <Card.Text style={{fontSize: "2em"}}>Author Info</Card.Text>
                    <Card.Text>{user.name}</Card.Text>
                    <Card.Text>username: {user.username}</Card.Text>
                    <Card.Text>email: {user.email}</Card.Text>
                </div>
                <div style={{display: "flex", flexDirection: 'column', justifyContent:'space-between'}}>
                    <Card.Text style={{fontSize: "1.3em"}}>Adress</Card.Text>
                    {Object.keys(user.address).map((keys) => (
                        <Card.Text key={keys}>{keys}: {user.address[keys]}</Card.Text>
                    ))}
                </div>
                
                <div style={{"flexGrow": 1, display: 'flex', flexDirection:'column', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                    <Link to={postId ? `/#${postId}` : '/'}><Card.Link style={{cursor: 'pointer'}}>Go back to post {`>`}</Card.Link></Link>
                    <Card.Link style={{cursor: 'pointer'}} onClick={() => handleUsersPosts()}>Show posts</Card.Link>
                </div>
            </Card.Body>
            <Card.Body>
                {(!!user.posts.length && !user.postsHidden) && <CommentList comments={user.posts}></CommentList>}
                {(user.postLoaded && !user.postsHidden) && <Loader></Loader>}
            </Card.Body>
        </Card>
    );
}