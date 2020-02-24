import React from "react";

import BigBanner from "../components/BigBanner";
import { Card, Container, Form, Button, Row, Col } from "react-bootstrap";

class ContactUs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			comments: ''
		}
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(e, contactName, contactEmail, contactComments) {
		if (e.target.value !== '') {
			let value = e.target.value;

			this.setState({ [e.target.id]: value });
		}
	}
	onFormSubmit(e) {
		e.preventDefault();
		console.log('Form submitted.');
		console.log(this.state);
	}

	render() {
		return (
			<div>
				<BigBanner
					title="Got a problem?"
					content="Why not get in touch with us"
					bannerBackground="https://www.formula1.com/content/fom-website/en/championship/inside-f1/safety/cockpit-crash-tests/Crash_tests/_jcr_content/image16x9.img.1536.high.jpg"
					bannerClass="text-shadow text-white"
					h1ClassName="text-white"
					extraStyles="background-position: top center"					
				/>
				<Container>
					<div className="page-introcontent">
						<h2>Contact Us</h2>
						Complete the form below to send us an email, alternatively, you can
						contact us at{" "}
						<a href="mailto:support@kissmyass.com">support@kissmyass.com</a>
					</div>
					<div>
						<Row>
							<Col lg={9}>
								<Form>
									<Row>
										<Col lg={6}>
											<Form.Group controlId="name">
												<Form.Label>Your Name</Form.Label>
												<Form.Control
													type="text"
													placeholder="Enter your name"
													onChange={ contactName => this.onInputChange(contactName)}
												/>
											</Form.Group>
										</Col>
										<Col lg={6}>
											<Form.Group controlId="email">
												<Form.Label>Email address</Form.Label>
												<Form.Control
													type="email"
													placeholder="Enter email"
													onChange={ contactEmail => this.onInputChange(contactEmail)}
												/>
												<Form.Text className="text-muted">
													We'll never share your email with anyone else.
													Promise! x
												</Form.Text>
											</Form.Group>
										</Col>
									</Row>

									<Form.Group controlId="comments">
										<Form.Label>Your Message</Form.Label>
										<Form.Control
											as="textarea"
											rows="3"
											placeholder="Please be kind!"
											onChange={ contactComments => this.onInputChange(contactComments)}
										/>
									</Form.Group>

									<Button variant="primary" type="submit" onClick={ e => this.onFormSubmit(e) }>
										Submit
									</Button>
								</Form>
							</Col>
							<Col lg={3}>
								<Card bg="info" text="white" className="card--info">
									<Card.Header>Contact Us</Card.Header>
									<Card.Body>
										<a href="mailto:support@kissmyass.com" className="contactlink beforeHover">
											support@kissmyass.com
										</a>
									</Card.Body>
								</Card>
							</Col>
						</Row>
					</div>
				</Container>
			</div>
		);
	}
}

export default ContactUs;
