import React from 'react';

import BigBanner from '../components/BigBanner';

class YourTeam extends React.Component {
	render() {
		return (
			<div>
				<BigBanner
					title="Your Team"
					bannerClass="text-shadow text-white"
					h1ClassName="text-white"
				/>
				<div className="container">
					<p>
						This is your team.
					</p>
				</div>
			</div>
		);
	}
}

export default YourTeam;