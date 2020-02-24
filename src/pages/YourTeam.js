import React from "react";

import BigBanner from "../components/BigBanner";
import { Row } from "react-bootstrap";
import DriverCard from "../components/DriverCard";
import TeamCard from "../components/TeamCard";

class YourTeam extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			DriverOne: 'Driver One',
			DriverTwo: 'Driver Two',
			DriverThree: 'Driver Three',
			TeamOne: 'Team One',
			TeamTwo: 'Team Two',
			TeamThree: 'Team Three'
		}
	}

	render() {
		return (
			<div>
				<BigBanner
					title="Your Team"
					bannerClass="text-shadow text-white"
					h1ClassName="text-white"
				/>
				<div className="container">
					<p>This is your team.</p>
					<Row>
						<DriverCard driverName={this.state.DriverOne} />
						<DriverCard driverName={this.state.DriverTwo} />
						<DriverCard driverName={this.state.DriverThree} />
					</Row>
					<Row>
						<TeamCard teamName={this.state.TeamOne} />
						<TeamCard teamName={this.state.TeamTwo} />
						<TeamCard teamName={this.state.TeamThree} />
					</Row>
				</div>
			</div>
		);
	}
}

export default YourTeam;
