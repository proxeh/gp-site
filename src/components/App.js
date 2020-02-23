import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import BigBanner from './BigBanner';

import Homepage from '../pages/Homepage';
import About from '../pages/AboutUs';
import Contact from '../pages/ContactUs';
import YourTeam from '../pages/YourTeam';
import Predictions from '../pages/Predictions';
import PredictionsEdit from '../pages/PredictionsEdit';
import Results from '../pages/Results';

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<Header />
				<Route path="/" exact component={Homepage} />
				<Route path="/about-us" exact component={About} />
				<Route path="/contact-us" exact component={Contact} />
				<Route path="/your-team" exact component={YourTeam} />
				<Route path="/predictions" exact component={Predictions} />
				<Route path="/predictions/edit" exact component={PredictionsEdit} />
				<Route path="/results" exact component={Results} />
				<Footer />
			</BrowserRouter>
		)
	}
}

export default App;