import React from 'react';
import { Button, Container, Jumbotron } from 'react-bootstrap';

import './css/BigBanner.scss';

class BigBanner extends React.Component {
  render() {
    return (
      <Jumbotron style={{ backgroundImage: "url('" + this.props.bannerBackground + "')" }}>
        <Container className={'text-center ' + this.props.bannerClass}>
          <h1 className={this.props.h1ClassName}>{this.props.title}</h1>
          <p className={this.props.contentClassName}>{this.props.content}</p>
        </Container>
      </Jumbotron>
    );

  };
}

BigBanner.defaultProps = {
  bannerBackground: 'https://photos.grandprix.com/jpeg/phc/pmon19/sun/Hamilton_19_Monaco_16lg.jpg',
  bannerClass: '',
  h1ClassName: '',
  contentClassName: '',
  title: 'Fantasy GP',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque semper elementum sem, quis finibus risus molestie a. Praesent ornare, arcu in facilisis pretium, nisi ligula elementum lectus, vehicula elementum erat augue sit amet erat. Proin eu urna vitae arcu lobortis pretium sit amet eu lectus. Duis in imperdiet ante, vel bibendum libero. Morbi vestibulum urna ac odio luctus, id tempor nisl luctus. In ultricies felis in dolor tincidunt, sed pharetra libero sollicitudin. Suspendisse non metus eu tortor ultricies porta. Nam efficitur volutpat lobortis. In a vehicula arcu. Aliquam nibh arcu, euismod aliquam nulla eget, viverra condimentum lorem.'
}

export default BigBanner;