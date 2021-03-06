import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Input } from "react-materialize";
import "./Sessions.css";
import Header from "../../components/Header/Header";
import API from "../../utils/API"
//import Nav from "../../components/Nav/Nav";
import BAC from "../../components/BAC/BAC";
// import DrinkBtn from "../../components/DrinkBtn/DrinkBtn";
import SessionBtn from '../../components/SessionBtn/SessionBtn';
import EndBtn from '../../components/EndBtn/EndBtn';
// import { Button } from "react-materialize";
import Cocktail from "../../assets/images/cocktailBtn.png";
import Wine from "../../assets/images/wineBtn.png";
import Beer from "../../assets/images/beerBtn.png";
import Shot from "../../assets/images/shotBtn.png";

import DrinkGauge from "../../components/DrinkGauge/DrinkGauge";
import startBtn from "../../assets/images/startBtn.png"
import moment from 'moment'

class Sessions extends Component {
	state = {
		profile: {},
		sub: "",
		username: "",
		sex: "",
		weight: 0,
		session: [
			{
				drink: [],
			},
		],
		currentSessionDrinkCount: 0,
		drinkGoal: 0,
		bac: 0,
		maxBAC: 0,
		tts: "You're legally sober.",
		ttcs: "You're completely sober.",
		sessionID: "",
		startTime: "",
		inProgress: false
	};

	componentWillMount() {
		const { userProfile, getUserInfo, userInfo } = this.props.auth;
		if (this.props.auth.isAuthenticated()) {
			let oldToken = localStorage.getItem('access_token');
			let newProfile;
			this.props.auth.lock.getUserInfo(oldToken, (err, profile) => {
				console.log(profile);
				newProfile = profile;
				this.setState({ profile: newProfile }, () => {
					let newsub = this.state.profile.sub
					let newersub = newsub.split('|').pop()
					this.setState({ sub: newersub })
					API.getUser(newersub).then(res => {
						if (res.length > 0) {
							console.log("FIND ME" + res);

							this.setState({ sex: res.data.sex, weight: res.data.weight, session: [] })
						}
					})
						// .catch(API.saveUser({
						//             sub: newersub,
						// 		})
						.then(this.loadUser())


						//this.loadUser()
						;
				});
			});
		} else {
			console.log("RINGA")
			this.setState({ profile: userProfile }, this.loadUser());

		}
	}


	loadUser = () => {

		let newsub = this.state.profile.sub
		let newersub = newsub.split('|').pop()
		API.getUser(newersub)
			.then(res => {

				// console.log("FIND ME" + res);

				this.setState({ sex: res.data.sex, weight: res.data.weight, session: [] })

			}).catch(err => console.log(err))
	}

	takeDrink = () => {
		let bac = this.state.bac;
		let weight = this.state.weight;
		let sex = this.state.sex;
		var moment = require('moment');
		moment().format();
		if (sex === 'male' || 'm') {
			if (weight >= 90 && weight < 110) {
				bac += 0.038;
			}
			if (weight >= 110 && weight < 130) {
				bac += 0.031;
			}
			if (weight >= 130 && weight < 150) {
				bac += 0.027;
			}
			if (weight >= 150 && weight < 170) {
				bac += 0.023;
			}
			if (weight >= 170 && weight < 190) {
				bac += 0.021;
			}
			if (weight >= 190 && weight < 210) {
				bac += 0.019;
			}
			if (weight >= 210 && weight < 230) {
				bac += 0.017;
			}
			if (weight >= 230) {
				bac += 0.016;
			}
		}
		if (sex === 'female') {
			if (weight >= 90 && weight < 110) {
				bac += 0.045;
			}
			if (weight >= 110 && weight < 130) {
				bac += 0.038;
			}
			if (weight >= 130 && weight < 150) {
				bac += 0.032;
			}
			if (weight >= 150 && weight < 170) {
				bac += 0.028;
			}
			if (weight >= 170 && weight < 190) {
				bac += 0.025;
			}
			if (weight >= 190 && weight < 210) {
				bac += 0.023;
			}
			if (weight >= 210 && weight < 230) {
				bac += 0.021;
			}
			if (weight >= 230) {
				bac += 0.019;
			}
		}
		console.log(bac)
		// var current = moment()
		// var difference = this.state.startTime.diff(current, "minutes")
		// console.log(difference)
		// difference *= (.015/60)
		// bac -= difference
		// if(bac < 0){
		//     bac = 0
		// }
		let maxBAC = this.state.maxBAC;
		if (bac > maxBAC) {
			this.setState({ maxBAC: bac });
		}
		//console.log(bac)

		//console.log("pressed")
		bac = parseFloat(bac.toFixed(3));
		this.setState({ bac: bac }, this.bacDecay(bac), this.addDrink());
	};

	createdDrink = (oz, alcPercent) => {
		let bac = this.state.bac;
		let sex = this.state.sex;
		let weight = this.state.weight;
		if (sex === 'male') {
			let addedBac = (0.071 * oz * alcPercent) / weight;
			bac = addedBac + bac;
		}
		if (sex === 'female') {
			let addedBac = (0.085 * oz * alcPercent) / weight;
			bac = addedBac + bac;
		}
		this.setState({ bac: bac }, this.bacDecay(bac));
	};
	//this function could be used to update the time till sober
	update = () => {
		let bac = this.state.bac;
		this.bacDecay(bac);
	};
	bacDecay = tbac => {
		var moment = require('moment');
		moment().format();
		var minutes = 0;
		var cminutes = 0;
		var ctbac = tbac
		//not using state for tbac since state is asynchronous and will not update immediately, which was leading to the time present always one drink behind
		//let tbac = this.state.bac
		//bac reduces at .015 an hour
		//legally sober at .08 bac
		//need to take start time of session, then find the amount of time until bac = 0 at the pace of .015 an hour.
		var bacReductionPerMinute = 0.015 / 60;
		console.log(bacReductionPerMinute);
		while (tbac > 0.08) {
			tbac -= bacReductionPerMinute;
			minutes += 1;

		}
		while (ctbac > 0.00) {
			ctbac -= bacReductionPerMinute;
			cminutes += 1;

		}
		if (cminutes === 0) {
			this.setState({ ttcs: "You're completely sober." })

		}
		else {
			var TimeOfCSober = moment()
				.add(cminutes, 'minutes')
				.format('hh:mm a');

			//finds difference in minutes between current time and time will sober, though all of this is unnecessary since the minutes variable already knows this information....
			// var TimeTillSober = moment().add(minutes, 'minutes');
			// var current = moment();
			// console.log(TimeTillSober.diff(current, 'minutes'));
			this.setState({ ttcs: TimeOfCSober });

			if (minutes === 0) {
				this.setState({ tts: "You're legally sober." })

			}
			//takes current time then adds the amount of minutes until sober, formats into hour:minutes AM/PM
			else {
				var TimeOfSober = moment()
					.add(minutes, 'minutes')
					.format('hh:mm a');

				//finds difference in minutes between current time and time will sober, though all of this is unnecessary since the minutes variable already knows this information....
				this.setState({ tts: TimeOfSober });
			}

		}
	}

	endSession = () => {
		console.log("Date punchout" + Date.now())
		this.setState({ bac: 0, tts: '' });
		API.updateSession(this.state.sessionID, { maxBAC: this.state.maxBAC, endedAt: moment().format('MMM Do YYYY, h:mm:ss a'), inProgress: false })
			.then(res => console.log(res))
			.catch(err => console.log(err));
	};

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	startSession = () => {
		var moment = require('moment');
		moment().format();
		//event.preventDefault();
		API.saveSession({
			// drinkGoal: this.state.drinkGoal,
			budget: this.state.budget,
			maxBAC: this.state.maxBAC,
			sub: this.state.sub,
			drinkGoal: this.state.drinkGoal,
			createdAt: moment().format('MMM Do YYYY, h:mm:ss a')
		})
			.then(res => this.setState({ sessionID: res.data._id, startTime: moment(), inProgress: res.data.inProgress }, () => console.log("TIME: " + this.state.startTime)))
			.catch(err => console.log(err));

	};

	addDrink = () => {
		//event.preventDefault();
		API.saveDrink({
			sessionid: this.state.sessionID,
		})
			// .then(res => this.loadSessions())
			.catch(err => console.log(err));
		let newDrinkCount = this.state.currentSessionDrinkCount + 1;
		this.setState({ currentSessionDrinkCount: newDrinkCount });
	};

	render() {
		const { profile } = this.state;
		return (
			<div>
				<Header props={profile} logout={() => { this.props.auth.logout() }} />
				<Container>
					<Container>
						<Row className="titleSessions">
							<div className="center">
								Sessions
							</div>
						</Row>

						{this.state.sessionID !== "" ?
							<div>
								<Row>
									<BAC bac={this.state.bac} tts={this.state.tts} ttcs={this.state.ttcs} />
								</Row>
								<Row className="titleSessionsSub center">
									<div className="titleSessionsSub">Drinks</div>
								</Row>
								<Row className="drinkRow center">
									<Col s={3} className="drinkCol">
										<img src={Beer} className="drinkBtn"
											bac={this.props.bac} onClick={this.takeDrink}
											name="beer" alt="" />
									</Col>
									<Col s={3} className="drinkCol">
										<img src={Shot} className="drinkBtn"
											bac={this.props.bac} onClick={this.takeDrink}
											name="shot" alt="" />
									</Col>
									<Col s={3} className="drinkCol">
										<img src={Wine} className="drinkBtn"
											bac={this.props.bac} onClick={this.takeDrink}
											name="wine" alt="" />
									</Col>
									<Col s={3} className="drinkCol">
										<img src={Cocktail} className="drinkBtn"
											bac={this.props.bac} onClick={this.takeDrink}
											name="cocktail" alt="" />
									</Col>
								</Row>
							</div> :
							<div >
								<Row className="drinkQ center">
									<div >
										<p>Cheers! How many drinks should you have tonight?</p>
									</div>
								</Row>

							</div>
						}


						<Row className="center">

							{this.state.sessionID === "" ?
								<Container>
									<Row className="drinkQ">
										<Col s={2} />
										<Col s={8} className="drinkInput center">
											<form>
												<label className="drinkInLabel ">
													Tonight's drinks:
                                    <input type="number" name="drinkGoal" className="drinkNumber" onChange={this.handleInputChange} />
												</label>
												{this.state.drinkGoal > 0 ?
													<div onClick={this.startSession} className="start center"><img alt="Start Session" className="startBtnSess" src={startBtn} /></div>
													: <div></div>
												}
											</form>
										</Col>
										<Col s={2} />
									</Row>
								</Container> :
								<div>
									<Row>
										<DrinkGauge DrinkCount={this.state.currentSessionDrinkCount} DrinkGoal={this.state.drinkGoal} />
									</Row>
									<Row>
										<Link
											to="/drinkory"
											className={window.location.pathname === '/drinkory' ? 'nav-link active' : 'nav-link'}
										>
											<EndBtn onClick={this.endSession} />
										</Link>
									</Row>
								</div>
							}
						</Row>
					</Container>
				</Container>
			</div>
		);
	}
}


export default Sessions;
