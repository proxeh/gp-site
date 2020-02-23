import React from 'react';

import BigBanner from '../components/BigBanner';

class Results extends React.Component {
	render() {
		return (
			<div>
				<BigBanner
					title="Race results"
					bannerClass="text-shadow text-white"
					h1ClassName="text-white"
				/>
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