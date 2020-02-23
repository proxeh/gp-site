import React from 'react';

import BigBanner from '../components/BigBanner';

class AboutUs extends React.Component {
	render() {
		return (
			<div>
				<BigBanner
					title="Learn more about us!"
					bannerClass="text-shadow text-white"
					h1ClassName="text-white"
				/>
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