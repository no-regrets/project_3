import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import './Profile.css';
import API from '../../utils/API';
import SessionBtn from '../../components/SessionBtn/SessionBtn';
import Header from '../../components/Header/Header';
import { Container, Row, Col } from 'react-materialize';
import ProfileChg from '../../components/ProfileChg/ProfileChg';

class Profile extends Component {
	state = {
		profile: {},
		sessionID: '',
		sub: '',
		sex: '',
		weight: 0,
	};

	componentDidMount() {
		const { userProfile, getUserInfo, userInfo } = this.props.auth;
		if (this.props.auth.isAuthenticated()) {
			let oldToken = localStorage.getItem('access_token');
			let newProfile;
			this.props.auth.lock.getUserInfo(oldToken, (err, profile) => {
				console.log(profile);
				newProfile = profile;
				this.setState({ profile: newProfile, sub: newProfile.sub.split('|').pop() });
				// API.saveUser({
				// 	sub: this.state.sub,
				// }).then(this.fetchUser);
				this.fetchUser();
			});
		} //else {
		//this.setState({ profile: userProfile });
		//}
	}
	//With arrow functions as opposed to standard functions, the context of 'this' points to Profile instead of the getUserInfo function.

	fetchUser = () => {
		let sub = this.state.sub
		API.getUser(sub).then(res => {
			// console.log("PAYLOAD" + JSON.stringify(res))
			if (!res.data) {
				console.log("SAVING A NEW USER")
				API.saveUser({
					sub: sub,
				}).then(res => this.updateUser(sub))
			} else {
				console.log("LOADING AN EXISTING USER")
				// console.log("PAYLOAD" + JSON.stringify(res))
				this.setState({ sex: res.data.sex, weight: res.data.weight });
			}

		});
	};

	updateUser = (sub) => {
		API.getUser(sub).then(res2 => {
			// console.log("PAYLOAD TWO" + JSON.stringify(res2))
			this.setState({ sex: res2.data.sex, weight: res2.data.weight })
		})
	}

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

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value,
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.sex && this.state.weight) {
			API.updateUser(this.state.sub, {
				sex: this.state.sex,
				weight: this.state.weight,
			})
				// .then(res => this.loadBooks())
				.catch(err => console.log(err));
		}
	};

	render() {
		const { profile } = this.state;
		return (
			<div>
				<Header props={profile} />
				<Container>
					<Container>
						<Row className="titleProfile">
							<div className="center">
								Profile
							</div>
						</Row>
						<Row className="profile">
							<Col s={4} className="profilePic" >
								<img className="circle" src={profile.picture} alt="profile" />
							</Col>
							<Col s={8}>
							<Container>
							<Row className="nameRow">
								<p className="name">Hello  </p>
								<p className="name">{profile.name}</p>
							</Row>
							
							<Row className="category">
							<Col className="category">Sex: </Col>
							<Col className="stats">{this.state.sex}</Col>
							</Row>
							<Row className="category">
							<Col className="category">Weight: </Col>
							<Col className="stats">{this.state.weight}</Col>
							<Col className="ibs"> lbs</Col>
							<Col s={2} className="right">
								<ProfileChg
									state={this.state}
									onClick={this.handleFormSubmit}
									onChange={this.handleInputChange}
								/>
								</Col>
							</Row>
							</Container>
							</Col>
						</Row>
						{/* <div>
										<h2 className="header">Profile</h2>

									</div> */}
						<Row className="editBtn">
							<form onSubmit={this.handleSubmit} />

						</Row>

						<Row>
							<Link to="/sessions">
								<SessionBtn />
							</Link>
						</Row>
					</Container>
				</Container>
			</div>
		);
	}
}

export default Profile;
