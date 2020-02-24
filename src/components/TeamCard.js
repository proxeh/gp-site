import React from 'react';
import { Card, Col } from 'react-bootstrap';

class TeamCard extends React.Component {
	render() {
		return (
			<Col lg={4}>
				<Card className="text-center">
					<img
						src="#"
						alt={this.props.teamName}
					/>
					{this.props.teamName}
				</Card>
			</Col>
		);
	}
}

export default TeamCard;