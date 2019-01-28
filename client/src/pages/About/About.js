import React, { Component } from 'react';
import { Container, Row, Col, Card, CardTitle } from 'react-materialize';
import './About.css';
import logo from '../../assets/images/gremlin-face.png';
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
			<Header props={profile} />
			<div className="body">
				<Container className="margin">
					<Row>
						<Card
							className="small card"
							header={<CardTitle image={logo}>Gremlin</CardTitle>}
							actions={[
								<a className="link" href="#">
									This is a Link
								</a>,
							]}
						>
							I am a very simple card. I am good at containing small bits of information. I am convenient
							because I require little markup to use effectively.
						</Card>
					</Row>
				</Container>
			</div>
			<Foot />
        </div>
        )
    }
        
}


export default About;
