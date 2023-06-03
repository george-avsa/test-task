import { useDispatch } from "react-redux";
import { toggleDropdown } from "../store/settingsReducer";
import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export function NavigationDropdown() {


    const dispatch = useDispatch();

    function hadleDropdown() {
        dispatch(toggleDropdown());       
    }

    return (
        <Nav>
            <Container style={{textAlign: "right"}} onClick={() => hadleDropdown()}>
                <Nav.Link style={{paddingRight: 0}}><Link to="/">Posts</Link></Nav.Link>
                <Nav.Link style={{paddingRight: 0}}><Link to="aboutme">About me</Link></Nav.Link>
                <Nav.Link style={{paddingRight: 0}}><Link to="/user/1">Users</Link></Nav.Link>
            </Container>
        </Nav>
    );
}