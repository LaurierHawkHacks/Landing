import React from "react";
import Styled from "styled-components";
import { PopupButton } from "@typeform/embed-react";
import { Container, Nav, Navbar } from "react-bootstrap";
import SocialIcons from "./SocialIcons";
import Icon from "../assets/icon.svg";

const MLHAnchor = Styled.a`
	max-width: 100px;
	min-width: 60px;
	position: fixed;
	right: 50px;
	top: 0;
	width: 10%;
	z-index: 10000;
	// 1200px corresponds to the bootstrap 'xl' breakpoint
	@media (min-width: 1200px) {
		display: block;
	}
	display: none;
`;

const MLHSpacer = Styled.div`
	max-width: 100px;
	min-width: 60px;
	width: 10%;
	margin-right: 50px;
	// 1200px corresponds to the bootstrap 'xl' breakpoint
	@media (min-width: 1200px) {
		display: block;
	}
	display: none;
`;

const MLHImage = Styled.img`
	width: 100%;
`;

const MLHBanner = () => {
    return (
        <MLHAnchor
            id="mlh-trust-badge"
            href="https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=gray"
            target="_blank"
        >
            <MLHImage
                src="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-gray.svg"
                alt="Major League Hacking 2022 Hackathon Season"
            />
        </MLHAnchor>
    );
};

const NavLink = Styled(Nav.Link)`
    font-size: 0.92rem;
    font-weight: 600;
`;

const AppNavbar = () => {
    return (
        <Navbar id="header" expand="xl" sticky="top" className="bg-hh-accent">
            <Container>
                <Navbar.Brand href="#">
                    <img className="mx-2" src={Icon} width="50" height="50" alt="HawkHacks Icon" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="nav-main me-auto">
                        <NavLink href="#about">About</NavLink>
                        <NavLink href="#faq">FAQ</NavLink>
                        <NavLink href="#newsletter">Newsletter</NavLink>
                        <NavLink href="#partners">Partners</NavLink>
                        <NavLink href="#sponsors">Sponsors</NavLink>
                        <NavLink href="#team">Meet The Team</NavLink>
                    </Nav>
                    <Nav className="nav-right d-flex align-items-center">
                        <PopupButton id="ud88xVfK" className="nav-link" as="a">
                            Apply Now
                        </PopupButton>
                        <SocialIcons />
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <MLHBanner />
            <MLHSpacer />
        </Navbar>
    );
};

export default AppNavbar;
