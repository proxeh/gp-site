import React from 'react';

import { Card } from 'react-bootstrap';

import BigBanner from '../components/BigBanner';
import NewsCards from '../components/NewsCards';

class Homepage extends React.Component {
	render() {
		return (
			<div>
				<BigBanner 
					title="Welcome to the site!"
					content="Scroll down to learn more"
					bannerClass="text-shadow text-white"
					bannerBackground="https://www.formula1.com/content/dam/fom-website/manual/Misc/2021-Master-Folder/F1%202021%20LAUNCH%20RENDERING%20track%20(7).jpg.transform/9col/image.jpg"
					h1ClassName="text-white"
				/>
				<div className="container">
					<Card>
						<Card.Body>This is the homepage.</Card.Body>						
					</Card>
					<NewsCards title="Latest News" />
				</div>
			</div>
		);
	}
}

export default Homepage;