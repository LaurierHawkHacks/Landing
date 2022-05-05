import React from "react";
import Styled from "styled-components";
import { Container, Row } from "react-bootstrap";
import { Icon, HawkHeart, HawkGold } from "./assets";

import FAQ from "./components/FAQ";
import Illustration from "./components/Illustration";
import SocialIcons from "./components/SocialIcons";
import PartnersSection from "./components/partners/PartnersSection";
import SponsorTiersDisplay from "./components/sponsors/SponsorTiersDisplay";
import SponsorCarousel from "./components/sponsors/SponsorCarousel";
import MeetTheTeam from "./components/team/MeetTheTeam";
import MeetTheJudges from "./components/judges/MeetTheJudges";
import HeroButtons from "./components/HeroButtons";
import AppNavbar from "./components/Navbar";
import NewsletterForm from "./components/newsletter/NewsletterForm";
import Banner from "./components/Banner";

import "./App.css";
import ScheduleSection from "./components/schedule/ScheduleSection";

const GradientBackground = Styled.div``;

const AnimatedIcon = Styled.img`
    transition: all 0.25s ease;
    :hover {
        filter: brightness(75%);
        transition: all 0.25s ease;
        animation-name:rotate;
        animation-duration: 5s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        @keyframes rotate{
            100%{
                transform:rotate(360deg);
            }
        }
    }
`;

function App() {
    React.useEffect(() => {
        const subdomain = window.location.host.split(".")[0];
        if (subdomain == "mentoring" || subdomain == "mentor")
            window.location = "https://hawkhacks.notion.site/Mentoring-Information-Package-211cefb551024b09a467f225a151e445";

        else if (subdomain == "judging" || subdomain == "judge")
            window.location = "https://hawkhacks.notion.site/Judging-Information-Package-27f1709a196e4d0b96a5026e87ac3816";

    }, []);

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
                        className="hero-container foreground"
                    >
                        <div className="spacer" style={{ width: "100%", height: "7.5em" }} />
                        <AnimatedIcon
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
                                    Remember, you don’t have to be a pro to participate - show up
                                    with ten years or ten minutes of experience (oh yeah, and a
                                    great attitute too!)
                                </p>
                            </div>

                            <div className="col-md-6 text-right">
                                <img
                                    src={HawkGold}
                                    className="img-fluid"
                                    alt="About Illustration"
                                    style={{ opacity: "1.0" }}
                                />
                            </div>

                            <div className="col" />
                        </div>
                    </Container>

                    <Container id="why-laurier" className="foreground">
                        <div className="spacer" style={{ width: "100%", height: "7.5em" }} />
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
                    </Container>

                    <div className="spacer" style={{ width: "100%", height: "5em" }} />
                    <Banner />

                    <Container id="what-can-i-gain" className="foreground">
                        <div className="spacer" style={{ width: "100%", height: "10em" }} />
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h3>// What can I gain?</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-2" />
                            <div className="col-md-8 text-center">
                                <p>
                                    Hackathons are a great place to gain experience, knowledge, connections, and cool swag. Every participant in HawkHacks will be delivered their very own shipment of swag! Otherwise, there’s ample oppurtunities to attend mini-gaming events, workshops, seminars, and networking events hosted by our industry partners with some giveaways on the side too!
                                </p>
                            </div>
                        </div>
                    </Container>

                    <div id="schedule" className="foreground">
                        <div className="spacer" style={{ width: "100%", height: "5em" }} />
                        <ScheduleSection />
                    </div>

                    <Container id="faq" className="foreground">
                        <div className="spacer" style={{ width: "100%", height: "10em" }} />
                        <FAQ />
                    </Container>

                    <Container id="contact" className="foreground">
                        <div className="spacer" style={{ width: "100%", height: "10em" }} />
                        <NewsletterForm />
                    </Container>

                    <Container id="partners">
                        <div className="spacer" style={{ width: "100%", height: "10em" }} />
                        <PartnersSection />
                    </Container>

                    <Container id="sponsors" className="foreground">
                        <div className="spacer" style={{ width: "100%", height: "10em" }} />
                        <div className="our-sponsors">
                            <h2 className="sponsors-title">{"<Our Sponsors/>"}</h2>
                            <p className="sponsors-subtitle">
                                These are the people who make what we do possible. Check out all our
                                amazing sponsors below, and tell them we sent you!
                            </p>
                            <img src={HawkHeart} alt="sponsor bird" className="sponsors-bird" />
                        </div>
                        <SponsorCarousel />
                        <SponsorTiersDisplay />
                    </Container>

                    <Container id="team" className="foreground">
                        <div className="spacer" style={{ width: "100%", height: "10em" }} />
                        <MeetTheTeam />
                    </Container>

                    <Container id="team" className="foreground">
                        <div className="spacer" style={{ width: "100%", height: "10em" }} />
                        <MeetTheJudges />
                    </Container>
                </div>

                <div>
                    <Illustration
                        src_name="illustration_4"
                        width="100%"
                        maxWidth="102em"
                        position="relative"
                        id="illustration-footer"
                        top="5px"
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
