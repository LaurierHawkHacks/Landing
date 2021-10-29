import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Styled from 'styled-components';
import { AiOutlineTwitter as Twitter, AiFillInstagram as Instagram, AiOutlineGithub as Github } from 'react-icons/ai';
import { FaFacebookSquare as Facebook } from 'react-icons/fa';
import Illustration from './components/Illustration';
import './App.css';
import Icon from './assets/icon.svg';

const GradientBackground = Styled.div`
  
`;

function App() {
  return (
    <GradientBackground className="bg-hh-gradient">
      <Illustration src_name="illustration_1" top="2em" />
      <Illustration src_name="illustration_2" top="40em" />
      <Illustration src_name="illustration_3" top="110em" />
      <Illustration src_name="illustration_4" top="140em" bottom="0" width="100%" />
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
              <Nav.Link href="#faq" className="mx-1">FAQ</Nav.Link>
              <Nav.Link href="#sponsors" className="mx-1">Sponsors</Nav.Link>
              <Nav.Link href="#team" className="mx-1">Meet The Team</Nav.Link>
            </Nav>
            <Nav className="nav-right d-flex">
              <Nav.Link href="#apply" className="mx-1">Apply Now</Nav.Link>
              <div className="d-flex align-items-center my-2">
                <Facebook
                  className="mx-2"
                  size="24px"
                  alt="Facebook social icon"
                />
                <Twitter
                  className="mx-2"
                  size="24px"
                  alt="Twitter social icon"
                />
                <Instagram
                  className="mx-2"
                  size="24px"
                  alt="Instagram social icon"
                />
                <Github
                  className="mx-2"
                  size="24px"
                  alt="Github social icon"
                />
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container id="home" className="d-flex flex-column align-items-center foreground">
        <div className="spacer" style={{ width: "100%", height: "8em" }}/>
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
        <div id="home-buttons" className="d-flex flex-column flex-sm-row">
          <Button>Apply</Button>
          <Button>Sponsor</Button>
          <Button>Events</Button>
        </div>
        <div className="spacer" style={{ width: "100%", height: "6em" }}/>
      </Container>

      <Container id="about" className="foreground">
        <div className="spacer" style={{ width: "100%", height: "2em" }}/>
        <div className="row">
          <div className="col-md">
            <h1>About HawkHacks</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="col" />
        </div>
        <div className="spacer" style={{ width: "100%", height: "6em" }}/>
      </Container>

      <Container id="pitch" className="foreground">
        <div className="spacer" style={{ width: "100%", height: "2em" }}/>
        <div className="row">
          <div className="col" />
          <div className="col-md text-right">
            <h1>Pitch to students (rename)</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <div className="spacer" style={{ width: "100%", height: "6em" }}/>
      </Container>

      <Container id="faq" className="foreground">
        <h1>Frequently Asked Questions</h1>
      </Container>

      <Container id="sponsors" className="foreground">
        <h1>Our Sponsors</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>

      <Container id="team" className="foreground">
        <h1>Our Sponsors</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>

      <Container id="footer" className="foreground">
        <a>Code of Conduct</a>
        <p>&#169; Copyright 2021 HawkHacks</p>
        <p>[SOCIALS HERE TOO]</p>
      </Container>
    </GradientBackground>
  );
}

export default App;
