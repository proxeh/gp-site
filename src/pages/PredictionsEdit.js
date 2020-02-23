import React from 'react';
import { Link } from 'react-router-dom';

import BigBanner from '../components/BigBanner';

class PredictionsEdit extends React.Component {
	render() {
		return (
			<div>
				<BigBanner title="Welcome to the site!" content="Scroll down to learn more" />
				<div className="container">
					<p>
						Edit your predictions.<br /><br />
						<Link to="/predictions" className="btn btn-primary">Save your predictions</Link>
					</p>
				</div>
			</div>
		);
	}
}

export default PredictionsEdit;