import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import './Profile.css';
import API from '../../utils/API';
import SessionBtn from '../../components/SessionBtn/SessionBtn';
import Header from "../../components/Header/Header";
import { Container, Row, Col } from 'react-materialize';
import ProfileChg from "../../components/ProfileChg/ProfileChg";

class Profile extends Component {
	state = {
		profile: {},
		sessionID: "",
	};

	componentDidMount() {
		const { userProfile, getUserInfo, userInfo } = this.props.auth;
		if (this.props.auth.isAuthenticated()) {
			let oldToken = localStorage.getItem('access_token');
			let newProfile;
			this.props.auth.lock.getUserInfo(oldToken, (err, profile) => {
				console.log(profile);
				newProfile = profile;
				this.setState({ profile: newProfile });
			});
		} //else {
		//this.setState({ profile: userProfile });
		//}
	}
	//With arrow functions as opposed to standard functions, the context of 'this' points to Profile instead of the getUserInfo function.

	startSession = event => {
		event.preventDefault();
		API.saveSession({
			drinkGoal: this.state.drinkGoal,
			maxBAC: this.state.maxBAC,
			budget: this.state.budget,
			sub: this.state.profile.sub,
		})
			.then(res => this.setState({ sessionID: res.data._id }))
			.catch(err => console.log(err));
	};

	addDrink = event => {
		event.preventDefault();
		API.saveDrink({
			sessionid: this.state.sessionID,
		})
			// .then(res => this.loadSessions())
			.catch(err => console.log(err));
	};

	render() {
		const { profile } = this.state;
		return (
			<div>
				<Header />
				<div className="profile-area">
					<Container>
						<Row>
							<Container>
								<div className="card">
								<Row>
									<Col s={4}>
										<img src={profile.picture} alt="profile" />
									</Col>
									<Col s={8}>
									<h2 className="name">{profile.name}</h2>

									</Col>
									</Row>
									<Container className="card-stacked">

										<Row className="card-content">
											<Col>Sex:</Col><Col> from Database</Col>
											<Col>Weight:</Col><Col>from Database</Col>
											</Row>
									
										<Row className="card-action">
											<ProfileChg/>
										</Row>
									</Container>
								</div>
							</Container>
						</Row>
						{/* <h1>{profile.name}</h1>
					<Panel header="Profile">
						<img src={profile.picture} alt="profile" />
						<div>
							<ControlLabel>
								<Glyphicon glyph="user" /> Nickname
							</ControlLabel>
							<h3>{profile.nickname}</h3>
						</div>
						<pre>{JSON.stringify(profile, null, 2)}</pre>
					</Panel> */}
						<Link to="/sessions">
							<SessionBtn />
						</Link>
					</Container>
					{/* <Button onClick={this.addDrink}>Drink</Button>
          <Button >Logout</Button> */}
				</div>
			</div>
		);
	}
}

export default Profile;
