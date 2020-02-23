import React from 'react';

import BigBanner from '../components/BigBanner';

class Homepage extends React.Component {
	render() {
		return (
			<div>
				<BigBanner 
					title="Welcome to the site!"
					content="Scroll down to learn more"
					bannerBackground="https://www.formula1.com/content/dam/fom-website/manual/Misc/2021-Master-Folder/F1%202021%20LAUNCH%20RENDERING%20track%20(7).jpg.transform/9col/image.jpg"
				/>
				<div className="container">
					<p>
						This is the homepage.
					</p>
				</div>
			</div>
		);
	}
}

export default Homepage;