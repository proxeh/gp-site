import React from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';

import './css/BigBanner.scss';

class BigBanner extends React.Component {
  render() {
    return (
      <Jumbotron style={{ backgroundImage: "url('" + this.props.bannerBackground + "')" }}>
        <Container className={'text-center ' + this.props.bannerClass}>
          <h1>{this.props.title}</h1>
          <p>{this.props.content}</p>
        </Container>
      </Jumbotron>
    );

  };
}

BigBanner.defaultProps = {
  bannerBackground: 'https://robbreportedit.files.wordpress.com/2018/10/cm.jpg'
}

export default BigBanner;