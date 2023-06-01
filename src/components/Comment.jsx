import { Card } from "react-bootstrap";

export function Comment(props) {
    return (
        <Card style={{border: "0px solid black", background: "rgba(237, 152, 104, .1)", fontSize: ".7rem"}}>
            <Card.Body>
                <Card.Title style={{fontSize: "1rem"}}>{props.name}</Card.Title>
                <Card.Text style={{marginBottom: "0.5rem"}}>
                {props.body}
                </Card.Text>
                <Card.Text style={{opacity: .5, fontSize: '.6rem'}}>
                    Author: {props.email}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}