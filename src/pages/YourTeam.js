import React from 'react';

import BigBanner from '../components/BigBanner';

class YourTeam extends React.Component {
	render() {
		return (
			<div>
				<BigBanner title="Your Team" bannerClass="text-center" />
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