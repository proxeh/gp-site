import React from 'react';

import BigBanner from '../components/BigBanner';

class AboutUs extends React.Component {
	render() {
		return (
			<div>
				<BigBanner title="Learn more about us!" />
				<div className="container">
					<p>
						This is the About Us page.
					</p>
				</div>
			</div>
		);
	}
}

export default AboutUs;