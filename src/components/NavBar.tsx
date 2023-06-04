import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Route, Link, Outlet } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Container className="nav-style">
        <Navbar bg="none" variant={"dark"} expand="lg">
          <Container>
            <Nav className="me-auto">
              <div className="nav-font nav-style">
                <Nav.Link as={Link} to={"/home"} className="nav-padding">
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/code"} className="nav-padding">
                  Code
                </Nav.Link>
                <Nav.Link as={Link} to={"/art&3d"} className="nav-padding">
                  Art & 3D
                </Nav.Link>
              </div>
            </Nav>
          </Container>
        </Navbar>
      </Container>
      <Outlet />
    </>
  );
}

export default NavBar;
