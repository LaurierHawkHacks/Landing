import React from "react";
import Styled from "styled-components";
import { Button, Container, Row, InputGroup, FormControl } from "react-bootstrap";

import Illustration from "./components/Illustration";
import SocialIcons from "./components/SocialIcons";
import FAQ from "./components/FAQ";
import PartnersSection from "./components/partners/PartnersSection";
import SponsorTiersDisplay from "./components/sponsors/SponsorTiersDisplay";
import SponsorCarousel from "./components/sponsors/SponsorCarousel";
import MeetTheTeam from "./components/team/MeetTheTeam";
import Icon from "./assets/icon.svg";
import SponsorHawk from "./assets/sponsor_hawk_heart.png";
import AboutIllustration from "./assets/illustration_about.svg";

import "./App.css";
import HeroButtons from "./components/HeroButtons";
import AppNavbar from "./components/Navbar";
import NewsletterForm from "./components/newsletter/NewsletterForm";

const GradientBackground = Styled.div``;

function App() {
    return (
        <>
            <GradientBackground className="bg-hh-gradient">
                <div className="page-wrap">
                    <Illustration src_name="illustration_1" top="2em" />
                    <Illustration src_name="illustration_2" top="40em" />
                    <Illustration src_name="illustration_3" top="110em" />

                    <AppNavbar />

                    <Container
                        id="home"
                        className="d-flex flex-column align-items-center foreground"
                    >
                        <div className="spacer" style={{ width: "100%", height: "7.5em" }} />
                        <img
                            className="mx-2"
                            src={Icon}
                            width="110"
                            height="110"
                            alt="HawkHacks Icon"
                        />

                        <h1 className="font-weight-bold">&lt;HawkHacks 2022/&gt;</h1>
                        <h5>
                            <b>Wilfrid Laurier’s first large-scale global hackathon!</b>
                        </h5>
                        <div className="spacer" style={{ width: "100%", height: "2em" }} />
                        <p>
                            Wilfrid Laurier University | Fully Virtual | May 13<sup>th</sup> - 15
                            <sup>th</sup>
                        </p>
                        <HeroButtons />
                    </Container>

                    <Container id="about" className="foreground">
                        <div className="spacer" style={{ width: "100%", height: "10em" }} />
                        <div className="row">
                            <div className="col-md-6">
                                <h2 className="font-weight-bold">&lt;About HawkHacks/&gt;</h2>
                                <p>
                                    HawkHacks came out of a desire to give everyone an equal
                                    opportunity to get into tech, whether that be programming,
                                    networking, researching, learning, or teaching.
                                    <br />
                                    <br />
                                    Join hundreds of students across Canada (and across the world)
                                    in a 36 hour period of exploration, creativity, and learning!
                                    <br />
                                    <br />
                                    Remember, you don't have to be a pro to participate - show up
                                    with ten years or ten minutes of experience (oh yeah, and a
                                    great attitute too!)
                                </p>
                            </div>

                            <div className="col-md-6 text-right">
                                <img
                                    src={AboutIllustration}
                                    className="img-fluid"
                                    alt="About Illustration"
                                    style={{ opacity: "1.0" }}
                                />
                            </div>

                            <div className="col" />
                        </div>
                    </Container>

                    <Container id="why-laurier" className="foreground">
                        <div className="spacer" style={{ width: "100%", height: "10em" }} />
                        <div className="row align-items-center">
                            <div className="pe-lg-5" />
                            <div className="col-md-6 text-center">
                                <h3>// Why Laurier?</h3>
                            </div>
                            <div className="col-md-5 text-left">
                                <p>
                                    Our goal with HawkHacks is to showcase the amazing talent on
                                    display at our university. Often, smaller universities are
                                    outshun by bigger ones - we’d like to change that, by showing
                                    how awesome of a community exists here too!
                                </p>
                            </div>
                        </div>

                        <div className="spacer" style={{ width: "100%", height: "10em" }} />
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3>// What can I gain?</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
                                    ligula ut nisi volutpat mollis. Mauris in augue quis augue
                                    dignissim ullamcorper non porttitor nulla. Nam dapibus urna eget
                                    sagittis suscipit. Sed quis ipsum libero. Aliquam non tempor
                                    enim.
                                </p>
                            </div>
                        </div>
                    </Container>

                    <Container id="faq" className="foreground">
                        <div className="spacer" style={{ width: "100%", height: "10em" }} />
                        <FAQ />
                    </Container>
                    
                    <NewsletterForm/>

                    <Container id="partners">
                        <div className="spacer" style={{ width: "100%", height: "10em" }} />
                        <PartnersSection/>
                    </Container>

                    <Container id="sponsors" className="foreground">
                        <div className="spacer" style={{ width: "100%", height: "10em" }} />
                        <div className="our-sponsors">
                            <h2 className="sponsors-title">{"<Our Sponsors/>"}</h2>
                            <p className="sponsors-subtitle">
                                These are the people who make what we do possible. Check out all our
                                amazing sponsors below, and tell them we sent you!
                            </p>
                            <img src={SponsorHawk} alt="sponsor bird" className="sponsors-bird" />
                        </div>
                        <SponsorCarousel />
                        <SponsorTiersDisplay />
                    </Container>

                    <Container id="meettheteam" className="foreground">
                        <div className="spacer" style={{ width: "100%", height: "10em" }} />
                        <MeetTheTeam />
                    </Container>
                </div>

                <div>
                    <Illustration
                        src_name="illustration_4"
                        width="100%"
                        maxWidth="102em"
                        position="relative"
                        id="illustration-footer"
                    />
                    <footer
                        id="footer"
                        className="foreground site-footer m-0 w-100 d-flex justify-content-center"
                    >
                        <Row className="site-footer-content d-flex justify-content-center align-items-center">
                            <a
                                className="my-1 w-auto footer-link"
                                href={"https://static.mlh.io/docs/mlh-code-of-conduct.pdf"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Code of Conduct
                            </a>
                            <p className="footer-copyright my-1 w-auto d-flex flex-grow-1 justify-content-center">
                                Copyright &#169; {new Date().getFullYear()} HawkHacks
                            </p>
                            <SocialIcons />
                        </Row>
                    </footer>
                </div>
            </GradientBackground>
        </>
    );
}

export default App;
