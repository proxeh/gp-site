import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar, Row, Col, Button } from "react-bootstrap";

import './css/Header.scss';

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark" className="site-header">
        <Container>
          <Navbar.Brand href="#home">
          <img
            alt=""
            src="/favicon.png"
            width="32"
            height="32"
            className="d-inline-block align-top"
          />{' '}
          Formula Fantasy
          </Navbar.Brand>
          <Container fluid>
            <Row>
              <Col lg={9}>
                <nav>
                  <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/about-us">About Us</Link>
                    </li>
                    <li>
                      <Link to="/your-team">Your Team</Link>
                    </li>
                    <li>
                      <Link to="/predictions">Predictions</Link>
                    </li>
                    <li>
                      <Link to="/results">Results</Link>
                    </li>
                  </ul>
                </nav>
              </Col>
              <Col lg={3} className="text-right">
                <Button variant="primary">Log In</Button>
              </Col>
            </Row>
            
          </Container>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
