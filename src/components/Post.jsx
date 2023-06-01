import { Card, Spinner } from "react-bootstrap";
import { getComments, toggleVisibility } from "../store/postReducer";
import { useDispatch } from "react-redux";
import { CommentList } from "./CommentList";
import { useEffect } from "react";
import { Loader } from "./Loader";
import authorIcon from "./../images/authorIcon.svg";

export function Post(props) {

    const dispatch = useDispatch();

    function hadleCommentsClick(e) {
        const postId = e.target.getAttribute('data-id');
        if (!props.commentsLoaded) {
            dispatch(getComments(postId))
        } else {
            dispatch(toggleVisibility(postId))
        }
    }

    // useEffect(() => console.log(props.commentsList), [props.commentsList])

    return (
        <Card style={{marginLeft: "3em", marginRight: "3em"}}>
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.body}
                </Card.Text>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <a href="#" style={{textDecoration: 'none', color: '#000'}}>
                        <Card.Text style={{opacity: .5, fontSize: '.8rem', display: 'flex', alignItems:'center'}}>
                            <img src={authorIcon} style={{width: "15px", marginRight: "5px"}}></img>
                            <span>Author: {props.authorName}</span>
                        </Card.Text>
                    </a>
                    <Card.Link 
                        style={{fontSize: '.8rem', cursor: 'pointer'}} 
                        data-id={props.id} onClick={(e) => hadleCommentsClick(e)}
                    >{`${props.commentsHidden ? 'Show' : 'Hide'} comments`}</Card.Link>
                </div>
                {!!props.commentsList.length 
                    && !props.commentsHidden 
                    && <CommentList comments={props.commentsList}></CommentList>}

                {props.isLoading && <Loader />}
            </Card.Body>
        </Card>
    );
}