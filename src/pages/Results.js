import React from 'react';

import BigBanner from '../components/BigBanner';

class Results extends React.Component {
	render() {
		return (
			<div>
				<BigBanner title="Welcome to the site!" content="Scroll down to learn more" />
				<div className="container">
					<p>
						The results of the last race.
					</p>
				</div>
			</div>
		);
	}
}

export default Results;