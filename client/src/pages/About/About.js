import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle } from 'react-materialize';
import './About.css';
import Wes from '../../assets/images/wes.jpeg';
import Joe from '../../assets/images/joe1.jpeg';
import John from '../../assets/images/john.jpeg';
import Casey from '../../assets/images/casey.jpeg';

//import Nav from "../../components/Nav/Nav";
import { pink } from 'react-materialize';
import Header from '../../components/Header/Header';
import Foot from '../../components/Foot/Foot';

class About extends Component {

	state = {
		profile: {},
	};

	componentWillMount() {
		if (this.props.auth.isAuthenticated()) {
			let oldToken = localStorage.getItem('access_token');
			let newProfile;
			this.props.auth.lock.getUserInfo(oldToken, (err, profile) => {
				newProfile = profile;
				this.setState({ profile: newProfile, sub: newProfile.sub.split('|').pop() });
			});
		}
	}

	render() {
		const { profile } = this.state;
		return (
			<div className="">
				<Header props={profile} logout={() => {this.props.auth.logout()}} />
				<Container>
					<Container className="margin">
						<Row className="titleAbout">
							<div className="center">
								About Us
							</div>
						</Row>
						<Row>
							<Col m={6} s={12}>
								<Card className="black center"
									actions={[<a href="https://github.com/wesleykruger" className="linkAbout">Github</a>]}>
									<Row className="aboutMargin">
										<img className="circle" src={Wes} />
										<Row className="aboutInfo">
											<p className="nameAbout">Wes Kruger</p>
											<p className="cardFont">Psst. You want some Auth0? Cause I got the good stuff over here.</p>
										</Row>
									</Row>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col m={6} s={12}>
								<Card className="black center"
									actions={[<a href="https://github.com/JoseaphMankin" className="linkAbout">Github</a>]}>
									<Row className="aboutMargin">
										<img className="circle" src={Joe} />
										<Row className="aboutInfo">
											<p className="nameAbout">Joseaph Mankin</p>
											<p className="cardFont">Welcome to our MERNtastic voyage.</p>
										</Row>
									</Row>
								</Card>
							</Col>
						</Row>
						<Row>
							<Col m={6} s={12}>
								<Card className="black center"
									actions={[<a href="https://github.com/Shoka25" className="linkAbout">Github</a>]}>
									<Row className="aboutMargin">
										<img className="circle" src={John} />
										<Row className="aboutInfo">
											<p className="nameAbout">John van der Hagen</p>
											<p className="cardFont">BAC decay? That's easy. Testing it on yourself.... also easy.</p>
										</Row>
									</Row>
								</Card>
							</Col>
						</Row>
						<Row className="cardMargin">
							<Col m={6} s={12}>
								<Card className="black center"
									actions={[<a href="https://github.com/CaseyJak" className="linkAbout">Github</a>]}>
									<Row className="aboutMargin">
										<img className="circle" src={Casey} />
										<Row className="aboutInfo">
											<p className="nameAbout">Casey Lee</p>
											<p className="cardFont">I like big buttons and I can not lie.</p>
										</Row>
									</Row>
								</Card>
							</Col>
						</Row>
					</Container>
				</Container>
			</div>
		)
	}

}


export default About;
