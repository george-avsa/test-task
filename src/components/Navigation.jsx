import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import burger from "./../images/burger.svg";

export function Navigation() {
    const kek = useState(false);

    return (
        <>
        <Navbar>
            <Container style={{display: "flex", alignItems: "center"}}>
                <Navbar.Brand>Posts</Navbar.Brand>
                    <img src={burger} style={{width: '20px'}}/>
            </Container>
        </Navbar>
        
        </>
    );
}