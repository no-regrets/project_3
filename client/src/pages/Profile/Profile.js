import React, { Component } from 'react';
import { Link } from "react-router-dom";
// import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
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
		sub: "",
		sex: "",
		weight: "",
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
				this.fetchUser();
			});
		} //else {
		//this.setState({ profile: userProfile });
		//}
	}
	//With arrow functions as opposed to standard functions, the context of 'this' points to Profile instead of the getUserInfo function.

	fetchUser = () => {
		API.getUser(this.state.sub).then(res => {
			// console.log("PAYLOAD: " + res.data.sex)
			this.setState({sex: res.data.sex, weight: res.data.weight}) 
			// if(res.length > 0){
			// 	console.log("FIND ME" + res);
			// 	this.setState({sex: res.data.sex, weight: res.data.weight})    
			// }
			// }).catch(API.saveUser({
			// 			sub: this.state.sub,
			// 		})
			// 		// .then(this.loadUser())
			// 		)
	});
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
          [name]: value
        });
      };
    
      handleFormSubmit = event => {
		// event.preventDefault();
		console.log("I'm Working")
        // API.updateUser(this.state.sub, {
        //     sex: "female",
        //     weight: 500
        // })
        // if (this.state.title && this.state.author) {
        //   API.updateUser({
        //     sex: this.state.title,
        //     weight: this.state.author,
        //   })
        //     // .then(res => this.loadBooks())
        //     .catch(err => console.log(err));
        // }
	  };
	  
	  sayHello(){
		  console.log("Hello There")
	  }

	render() {
		const { profile } = this.state;
		return (
			<div>
				<Header props={profile}/>
				<div className="profile-area">
					<Container>
						<Row>
							<Container>
								<div className="card horizontal">
									<div className="card-image">
										<img src={profile.picture} alt="profile" />
									</div>
									<div>
										<h2 className="header"></h2>

									</div>
									<div className="card-stacked">
										<div className="card-content">
											<p>Welcome {profile.name}</p>
											<p>Your Stats are currently listed as:</p> 
											<p>Sex: {this.state.sex} | Weight: {this.state.weight} lbs</p>
										</div>
										<div className="card-action">
											<ProfileChg props={this.state} />
										</div>
										<form onSubmit={this.handleSubmit}>
        <label>
          Pick your favorite flavor:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
									</div>
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
