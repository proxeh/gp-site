import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

import './css/Footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="site-footer">
        <Container>
          <Row>
            <Col>
              <h2>
                <img
                  alt=""
                  src="/favicon.png"
                  width="32"
                  height="32"
                  className="d-inline-block align-top"
                />{' '}
                Formula Fantasy
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi aliquet, nunc ut varius maximus, enim felis vehicula erat, quis iaculis lectus tortor ac mi.
              </p>
            </Col>
            <Col lg="2">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about-us">About Us</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
              </ul>
            </Col>
            <Col lg="2">
              <ul>
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
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
