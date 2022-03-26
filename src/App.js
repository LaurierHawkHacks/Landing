import React from "react";
import Styled from "styled-components";
import { Button, Container, Nav, Navbar, Row } from "react-bootstrap";

import Illustration from "./components/Illustration";
import SocialIcons from "./components/SocialIcons";
import FAQ from "./components/FAQ";
import SponsorTiersDisplay from "./components/sponsors/SponsorTiersDisplay";
import Icon from "./assets/icon.svg";

import "./App.css";


const GradientBackground = Styled.div`
`;

function App() {
  return (
    <>
        <GradientBackground className="bg-hh-gradient">
            <div className="page-wrap">
                <Illustration src_name="illustration_1" top="2em" />
                <Illustration src_name="illustration_2" top="40em" />
                <Illustration src_name="illustration_3" top="110em" />

                <Navbar id="header" expand="lg" sticky="top" className="bg-hh-accent">
                    <Container className="mt-4 mb-3">
                        <Navbar.Brand href="#">
                            <img
                                className="mx-2"
                                src={Icon}
                                width="50"
                                height="50"
                                alt="HawkHacks Icon"
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbar-nav" />
                        <Navbar.Collapse id="navbar-nav">
                            <Nav className="nav-main me-auto">
                                <Nav.Link href="#about" className="mx-1">
                                    About
                                </Nav.Link>
                                <Nav.Link href="#pitch" className="mx-1">
                                    Pitch to students (rename)
                                </Nav.Link>
                                <Nav.Link href="#faq" className="mx-1">
                                    FAQ
                                </Nav.Link>
                                <Nav.Link href="#sponsors" className="mx-1">
                                    Sponsors
                                </Nav.Link>
                                <Nav.Link href="#team" className="mx-1">
                                    Meet The Team
                                </Nav.Link>
                            </Nav>
                            <Nav className="nav-right d-flex">
                                <Nav.Link href="#apply" className="mx-1">
                                    Apply Now
                                </Nav.Link>
                                <SocialIcons />
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Container
                    id="home"
                    className="d-flex flex-column align-items-center foreground"
                >
                    <div className="spacer" style={{ width: "100%", height: "8em" }} />
                    <img
                        className="mx-2"
                        src={Icon}
                        width="110"
                        height="110"
                        alt="HawkHacks Icon"
                    />
                    <h1 className="font-weight-bold">&lt;HawkHacks/&gt;</h1>
                    <h1 className="font-weight-bold">2022</h1>
                    <h5>put some fun slogan here</h5>
                    <p>Laurier | On-Campus and Virtual</p>
                    <div id="home-buttons" className="d-flex flex-column flex-sm-row w-100 px-4 justify-content-center">
                        <Button className="d-flex flex-grow-1 flex-sm-grow-0 justify-content-center my-2 py-2">Apply</Button>
                        <Button className="d-flex flex-grow-1 flex-sm-grow-0 justify-content-center my-2 py-2">Sponsor</Button>
                        <Button className="d-flex flex-grow-1 flex-sm-grow-0 justify-content-center my-2 py-2">Events</Button>
                    </div>
                </Container>

                <Container id="about" className="foreground">
                    <div className="spacer" style={{ width: "100%", height: "13em" }} />
                    <div className="row">
                        <div className="col-md">
                            <h1>About HawkHacks</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                        <div className="col" />
                    </div>
                </Container>

                <Container id="pitch" className="foreground">
                    <div className="spacer" style={{ width: "100%", height: "13em" }} />
                    <div className="row">
                        <div className="col" />
                        <div className="col-md text-right">
                            <h1>Pitch to students (rename)</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </Container>

                <Container id="faq" className="foreground">
                    <div className="spacer" style={{ width: "100%", height: "13em" }} />
                    <FAQ />
                </Container>

                <Container id="sponsors" className="foreground">
                    <div className="spacer" style={{ width: "100%", height: "13em" }} />
                    <h1>Our Sponsors</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <SponsorTiersDisplay/>
                </Container>

                <Container id="team" className="foreground"></Container>
                
                {/* <div className="spacer" style={{ width: '100%', height: '13em' }} />
                <div className="spacer" style={{ width: '100%', height: '30em' }} /> */}
            </div>

            <div>
                <Illustration src_name="illustration_4" width="100%" maxWidth="102em" position="relative" id="illustration-footer" />
                <div id="footer" className="foreground site-footer m-0 w-100 d-flex justify-content-center">
                    <Row className="site-footer-content d-flex justify-content-center align-items-center">
                        <a 
                            className="my-1 w-auto" 
                            href={"https://static.mlh.io/docs/mlh-code-of-conduct.pdf"} 
                            target="_blank" rel="noreferrer"
                            style={{ textDecoration: "none", color: "white" }}
                        >
                            Code of Conduct
                        </a>
                        <p className="my-1 w-auto d-flex flex-grow-1 justify-content-center">
                            &#169; Copyright {new Date().getFullYear()} HawkHacks
                        </p>
                        <SocialIcons />
                    </Row>
                </div>
            </div>
        </GradientBackground>
    </>
  );
}

export default App;
