import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import burger from "./../images/burger.svg";
import { NavigationDropdown } from "./NavigationDropdown";
import { useDispatch, useSelector } from "react-redux";
import { toggleDropdown } from "../store/settingsReducer";

export function Navigation() {

    const dropdownHidden = useSelector(state => state.settings.dropdownHidden);

    const dispatch = useDispatch();

    function hadleDropdown() {
        dispatch(toggleDropdown());       
    }

    return (
        <>
        <Navbar>
            <Container style={{display: "flex", alignItems: "center"}}>
                <Navbar.Brand>Test task</Navbar.Brand>
                    <img src={burger} style={{width: '20px'}} onClick={() => hadleDropdown()}/>
            </Container>
        </Navbar>
        {dropdownHidden && <NavigationDropdown></NavigationDropdown>}
        </>
    );
}