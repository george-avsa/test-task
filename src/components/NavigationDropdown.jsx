import { useDispatch } from "react-redux";
import { toggleDropdown } from "../store/settingsReducer";
import { Container, Nav } from "react-bootstrap";

export function NavigationDropdown() {


    const dispatch = useDispatch();

    function hadleDropdown() {
        dispatch(toggleDropdown());       
    }

    return (
        <Nav>
            <Container style={{textAlign: "right"}} onClick={() => hadleDropdown()}>
                <Nav.Link style={{paddingRight: 0}}>Posts</Nav.Link>
                <Nav.Link style={{paddingRight: 0}}>About me</Nav.Link>
                <Nav.Link style={{paddingRight: 0}}>Users</Nav.Link>
            </Container>
        </Nav>
    );
}