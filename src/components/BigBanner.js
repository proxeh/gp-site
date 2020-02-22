import React from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';

class BigBanner extends React.Component {
  render() {
    return (
      <Jumbotron>
        <Container>
          <h1>{this.props.title}</h1>
          <p>{this.props.content}</p>
        </Container>
      </Jumbotron>
    );

  };
}

export default BigBanner;