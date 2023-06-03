import { Card, Col, Container, Row} from "react-bootstrap";
import { getComments, toggleVisibility } from "../store/postReducer";
import { useDispatch } from "react-redux";
import { CommentList } from "./CommentList";
import { Loader } from "./Loader";
import authorIcon from "./../images/authorIcon.svg";
import { Link } from "react-router-dom";

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
        <Container style={{marginBottom: '20px'}}>
            <Card id={props.id}>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                        {props.body}
                    </Card.Text>
                    <Container>
                        <Row>
                            <Col sm="12" md="6">
                                <Link to={`user/${props.userId}/${props.id}`} style={{textDecoration: 'none', color: '#000'}}>
                                    <Card.Text style={{opacity: .5, fontSize: '.8rem',}}>
                                        <img src={authorIcon} style={{width: "15px", marginRight: "5px"}}></img>
                                        <span>Author: {props.authorName}</span>
                                    </Card.Text>
                                </Link>
                            </Col>
                            <Col sm="12" md="6" className="show-comments">
                                <Card.Link 
                                    style={{fontSize: '.8rem', cursor: 'pointer'}} 
                                    data-id={props.id} onClick={(e) => hadleCommentsClick(e)}
                                    >{`${props.commentsHidden ? 'Show' : 'Hide'} comments`}</Card.Link>
                            </Col>
                        </Row>
                    </Container>
                    {!!props.commentsList.length 
                        && !props.commentsHidden 
                        && <CommentList comments={props.commentsList}></CommentList>}

                    {props.isLoading && <Loader />}
                </Card.Body>
            </Card>
        </Container>
    );
}