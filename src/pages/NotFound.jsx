import { Alert, Container } from "react-bootstrap";

export function NotFound() {
    return (
        <Container>        
           <Alert variant='danger'>Page not found</Alert>
        </Container>
    );
}