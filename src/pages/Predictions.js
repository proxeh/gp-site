import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

import BigBanner from '../components/BigBanner';

import DriverCard from './PredictionsDriverCard';

class Predictions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			firstPlace: 'Max Verstappen',
			secondPlace: 'Charles Leclerc',
			thirdPlace: 'Daniel Ricciardo',
			howManyWillFinish: '14',
			howManyWillCrash: '2'
		}
	}
	render() {
		return (
			<div>
				<BigBanner
					title="Your race predictions"
					bannerClass="text-shadow text-white"
					h1ClassName="text-white"
				/>
				<div className="container">
					<div className="page-introcontent">
						<Row>
							<Col lg={9}>
								<h2>Your Predictions</h2>
								Your predictions for the upcoming race.
							</Col>
							<Col lg={3} className="text-right">
								<Link to="/predictions/edit" className="btn btn-primary">Edit your predictions</Link>
							</Col>
						</Row>
					</div>
					<div className="driver-predictions">
						<Row>
							<DriverCard driverName={this.state.firstPlace} />
							<DriverCard driverName={this.state.secondPlace} />
							<DriverCard driverName={this.state.thirdPlace} />
						</Row>
					</div>
					<div className="other-predictions">
						<Row>
							<Col>
								<div className="other-predictions--totalfinishers text-center">
									<h4>How many will finish the race?</h4>
									{this.state.howManyWillFinish}
								</div>
							</Col>
							<Col>
								<div className="other-predictions--totalcrashers text-center">
									<h4>How many will crash?</h4>
									{this.state.howManyWillCrash}
								</div>
							</Col>
						</Row>						
					</div>
				</div>
			</div>
		);
	}
}

export default Predictions;