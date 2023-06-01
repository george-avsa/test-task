import { useDispatch, useSelector } from "react-redux";
import { Post } from "../components/Post";
import { useEffect } from "react";
import { fetchPosts } from "../store/postReducer";
import { Loader } from "../components/Loader";

export function  Posts() {
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchPosts())}, []
    )

    useEffect(() => {
        console.log(posts)
    }, [posts])

    return (
        <>
            {!posts.length && <Loader />}
            {posts.map(post => (
                <Post {...post} key={post.id}></Post>
            ))}
        </>
    );
}