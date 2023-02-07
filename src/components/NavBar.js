import { Navbar, Nav } from "react-bootstrap";
import "./css/site.css";

function NavBar() {
  return (
    <Navbar className="nav-background" expand="lg" text="light">
      <Navbar.Brand href="/">IT Day</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;