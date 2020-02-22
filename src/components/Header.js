import React from "react";
import { Button, Container, Form, FormControl, Navbar, Nav, NavDropdown } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img
            alt=""
            src="/favicon.png"
            width="32"
            height="32"
            className="d-inline-block align-top"
          />{' '}
          FantasyGP
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Your Stuff" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Your Team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Your League</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Join a new League</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
