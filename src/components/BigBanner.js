import React from 'react';
import { Jumbotron } from 'react-bootstrap';

class BigBanner extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </Jumbotron>
    );

  };
}

export default BigBanner;