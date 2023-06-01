export function NavigationDropdown() {
    return (
        <Nav>
            <Container style={{textAlign: "right"}}>
                <Nav.Link style={{paddingRight: 0}}>Posts</Nav.Link>
                <Nav.Link style={{paddingRight: 0}}>About me</Nav.Link>
                <Nav.Link style={{paddingRight: 0}}>Users</Nav.Link>
            </Container>
        </Nav>
    );
}