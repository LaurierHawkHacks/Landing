import { Container, Nav, Navbar } from 'react-bootstrap';
import './App.css';
import Strip from './components/Strip';
import Icon from './assets/icon.svg';

function App() {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={Icon}
              width="50"
              height="50"
              alt="HawkHacks Icon"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="nav-main me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#faq">FAQ</Nav.Link>
              <Nav.Link href="#sponsors">Sponsors</Nav.Link>
              <Nav.Link href="#leaders">Our Team</Nav.Link>
            </Nav>
            <Nav className="nav-right d-flex">
              <Nav.Link href="#apply">Apply today</Nav.Link>
              <Container>
                <img
                  src={Icon}
                  width="50"
                  height="50"
                  alt="HawkHacks Icon"
                />
                <img
                  src={Icon}
                  width="50"
                  height="50"
                  alt="HawkHacks Icon"
                />
                <img
                  src={Icon}
                  width="50"
                  height="50"
                  alt="HawkHacks Icon"
                />
                <img
                  src={Icon}
                  width="50"
                  height="50"
                  alt="HawkHacks Icon"
                />
              </Container>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
