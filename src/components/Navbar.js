import React from "react";
import { PopupButton } from "@typeform/embed-react";
import { Container, Nav, Navbar } from "react-bootstrap";
import SocialIcons from "./SocialIcons";
import Icon from "../assets/icon.svg";

const AppNavbar = () => {
    return (
        <Navbar id="header" expand="lg" sticky="top" className="bg-hh-accent">
            <Container className="mt-4 mb-3">
                <Navbar.Brand href="#">
                    <img className="mx-2" src={Icon} width="50" height="50" alt="HawkHacks Icon" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="nav-main me-auto">
                        <Nav.Link href="#about" className="mx-1">
                            About
                        </Nav.Link>
                        <Nav.Link href="#faq" className="mx-1">
                            FAQ
                        </Nav.Link>
                        <Nav.Link href="#newsletter" className="mx-1">
                            Newsletter
                        </Nav.Link>
                        <Nav.Link href="#partners" className="mx-1">
                            Partners
                        </Nav.Link>
                        <Nav.Link href="#sponsors" className="mx-1">
                            Sponsors
                        </Nav.Link>
                        <Nav.Link href="#team" className="mx-1">
                            Meet The Team
                        </Nav.Link>
                    </Nav>
                    <Nav className="nav-right d-flex">
                        <PopupButton id="ud88xVfK" className="nav-link" as="a">
                            Apply Now
                        </PopupButton>
                        <SocialIcons />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppNavbar;
