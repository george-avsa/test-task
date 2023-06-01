import { Spinner } from "react-bootstrap";

export function Loader() {
    return (
        <div style={{width: "100%", display: 'flex', justifyContent: 'center'}}>
            <Spinner animation="border" role="status" style={{margin: "auto 30px auto 0px"}}>
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    );
}