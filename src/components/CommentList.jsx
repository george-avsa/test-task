import { Comment } from "./Comment";

export function CommentList({comments}) {
    return (
        <>
            {comments.map(comment => <Comment {...comment} key={comment.id}></Comment>)}
        </>
    );
}