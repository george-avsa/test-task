import { Card, Spinner } from "react-bootstrap";
import { getComments, toggleVisibility } from "../store/postReducer";

export function User(props) {

    return (
        <Card style={{marginLeft: "3em", marginRight: "3em"}}>
            <Card.Body style={{display: "flex", justifyContent: 'space-between', gap: '200px'}}>
                <div>
                    <Card.Text style={{fontSize: "2em"}}>Author Info</Card.Text>
                    <Card.Text>Patricia Lebsack</Card.Text>
                    <Card.Text>username: Patricia Lebsack</Card.Text>
                    <Card.Text>email: Julianne@kory.org</Card.Text>
                </div>
                <div>
                    <Card.Text style={{fontSize: "1.3em"}}>Adress</Card.Text>
                    <Card.Text style={{display: 'flex', gap: '10px'}}><p style={{opacity:.3}}>street:</p> "Hoeger Mall"</Card.Text>
                </div>
                <div style={{"flexGrow": 1, display: 'flex', flexDirection:'column', justifyContent: 'space-between', alignItems: 'flex-end'}}>
                    <Card.Link style={{cursor: 'pointer'}}>Go back to post {`>`}</Card.Link>
                    <Card.Link style={{cursor: 'pointer'}}>Show posts</Card.Link>
                </div>
            </Card.Body>
        </Card>
    );
}