import React, { Component } from "react";
import "./Drinkory.css";
import { Link } from "react-router-dom";
import Header from '../../components/Header/Header';
import Nav from "../../components/Nav/Nav";
import BAC from "../../components/BAC/BAC";
import SessionBtn from "../../components/SessionBtn/SessionBtn";
import { Table } from "react-materialize";
import API from "../../utils/API";
import TableItem from "../../components/TableItem/TableItem";


class Drinkory extends Component {

  state = {
		profile: {},
		sub: "",
		username: "",
		sex: "",
		weight: 0,
		session: [
			
		],
		currentSessionDrinkCount: 0,
        drinkGoal: 0,
		bac: 0,
		maxBAC: 0,
		tts: "",
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
                    this.setState({sub: newersub})
                    API.getUser(newersub).then(res => {
                    if(res.length > 0){
                        console.log("FIND ME" + res);

                        this.setState({sex: res.data.sex, weight: res.data.weight, session: res.data.session})    
                    }
					})
					// .catch(API.saveUser({
                    //             sub: newersub,
					// 		})
							.then(this.loadUser())

        
          //this.loadUser()
          ;});
      });
    } else {
            
      this.setState({ profile: userProfile }, this.loadUser()) ;
      
    }}


    loadUser = () => {
        
        let newsub = this.state.profile.sub
        let newersub = newsub.split('|').pop()
        API.getUser(newersub)
            .then(res => {

                // console.log("FIND ME" + res);

                this.setState({ sex: res.data.sex, weight: res.data.weight, session: res.data.session})

            }).catch(err => console.log(err))
        }
  render() {
    const { profile } = this.state;
   
    return(
      <div>
         <Header props={profile} />
        <div className="container">
          <div className="row">
            <BAC />
          </div>
          <div className="row">
            Drinkory Info
          </div>
          <Table>
            <thead>
              <tr>
                <th>Start Time</th>
                <th>End time</th>
                <th>Drink Goal</th>
                <th>Drinks Consumed</th>
              </tr>
            </thead>
            <tbody>
              {this.state.session.length ? (this.state.session.map(session => (<TableItem key={session._id} start={session.createdAt} end={session.endedAt} goal={session.drinkGoal} drinks={session.drink.length}/>))) : (<div>No results</div>)}
            </tbody>
          </Table>
          <div className="row">
            <Link to="/sessions" className={window.location.pathname === "/sessions"
                ? "nav-link active" : "nav-link"
            }><SessionBtn />
            </Link>
            or 
            <Link to="/end" className={window.location.pathname === "/end"
                ? "nav-link active" : "nav-link"
            }>End
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Drinkory;
