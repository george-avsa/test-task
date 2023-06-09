import { useDispatch, useSelector } from "react-redux";
import { Post } from "../components/Post";
import { useEffect } from "react";
import { fetchPosts } from "../store/postReducer";
import { Loader } from "../components/Loader";
import { setPostsLoaded } from "../store/settingsReducer";

export function  Posts() {
    const posts = useSelector(state => state.posts);
    const postLoaded = useSelector(state => state.settings.postLoaded);
    const dispatch = useDispatch();
    useEffect(() => {
        if (!postLoaded) {
            dispatch(fetchPosts())
            dispatch(setPostsLoaded())
        }
        }, []
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