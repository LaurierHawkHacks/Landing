import { Container, Nav, Navbar } from 'react-bootstrap';
import { AiOutlineTwitter as Twitter, AiFillInstagram as Instagram, AiOutlineGithub as Github } from 'react-icons/ai';
import { FaFacebookSquare as Facebook } from 'react-icons/fa';
import './App.css';
import Strip from './components/Strip';
import Icon from './assets/icon.svg';

function App() {
  return (
    <>
      <Navbar id="header" expand="lg" sticky="top">
        <Container className="my-4">
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
              <Nav.Link href="#leaders" className="mx-1">Our Team</Nav.Link>
            </Nav>
            <Nav className="nav-right d-flex">
              <Nav.Link href="#apply" className="mx-1">Apply Now</Nav.Link>
              <div className="d-flex align-items-center">
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

      <Container id="home" style={{height: "1000px"}}>
        <h1>Home</h1>
      </Container>

      <Container id="about">
        <h1>About</h1>
      </Container>
    </>
  );
}

export default App;
