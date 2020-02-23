import React from 'react';
import { Card, Col } from 'react-bootstrap';

class DriverCard extends React.Component {
	render() {
		return (
			<Col lg={4}>
				<Card className="text-center">
					Driver Name: {this.props.driverName}
				</Card>
			</Col>
		);
	}
}

export default DriverCard;