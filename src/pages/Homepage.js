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
						<Card.Body>
							<h1>Welcome to Fantasy Formula!</h1>
							<p>
								This is the homepage.
							</p>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in lobortis libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce gravida lacus et finibus porttitor. Vestibulum ultricies hendrerit ligula vel blandit. Duis et auctor nulla. Etiam vehicula nulla at lacus feugiat rhoncus ac sit amet lorem.
							</p>
						</Card.Body>						
					</Card>
					<NewsCards title="Latest News" />
				</div>
			</div>
		);
	}
}

export default Homepage;