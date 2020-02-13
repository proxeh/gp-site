import React from "react";
import { Container, NavLink, ListGroup, Row, Col, Nav } from "react-bootstrap";

import './css/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Container>
          <Row>
            <Col>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet, nunc ut varius maximus, enim felis vehicula erat, quis iaculis lectus tortor ac mi.
              </p>
            </Col>
            <Col lg="2">
              <Nav className="flex-column">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="">Other</Nav.Link>
                <Nav.Link href="">Other</Nav.Link>
              </Nav>
            </Col>
            <Col lg="2">
              <Nav className="flex-column">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="">Other</Nav.Link>
                <Nav.Link href="">Other</Nav.Link>
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
