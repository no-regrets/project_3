import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import './Profile.css';
import API from '../../utils/API';
import SessionBtn from '../../components/SessionBtn/SessionBtn';

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
			<div className="container">
				<div className="profile-area">
					<h1>{profile.name}</h1>
					<Panel header="Profile">
						<img src={profile.picture} alt="profile" />
						<div>
							<ControlLabel>
								<Glyphicon glyph="user" /> Nickname
							</ControlLabel>
							<h3>{profile.nickname}</h3>
						</div>
						<pre>{JSON.stringify(profile, null, 2)}</pre>
					</Panel>
					<Link to="/sessions">
						<SessionBtn />
					</Link>

					{/* <Button onClick={this.addDrink}>Drink</Button>
          <Button >Logout</Button> */}
				</div>
			</div>
		);
	}
}

export default Profile;
