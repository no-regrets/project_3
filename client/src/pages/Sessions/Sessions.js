import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Sessions.css";
import API from "../../utils/API"
import Nav from "../../components/Nav/Nav";
import BAC from "../../components/BAC/BAC";
import DrinkSession from "../../components/DrinkSession/DrinkSession"
import DrinkBtn from "../../components/DrinkBtn/DrinkBtn";
import EndBtn from "../../components/EndBtn/EndBtn";

class Sessions extends Component {

  state={
    profile: {},
    sub: "",
    username: "",
    sex: "",
    weight: 0,
    session: [{
      drink:[]
    }],
    bac: 0,
    tts: ""
  }

  componentDidMount() {
    this.loadUser();
  }

  loadUser = () => {
    API.getUser("5c3804c120104e9b3bdfbd47")
      .then(res => {
        this.setState({username: res.data.username, sex: res.data.sex, weight: res.data.weight, session: []})

      }).catch(err => console.log(err))
  }

  Drink = () => {

    let bac = this.state.bac
    let weight = this.state.weight
    let sex =this.state.sex
    if(sex === "male"){
      if(weight >= 90 && weight < 110){
          bac += .038
      }
      if(weight >= 110 && weight < 130){
          bac += .031
      }
      if(weight >= 130 && weight < 150){
          bac += .027
      }
      if(weight >= 150 && weight < 170){
          bac += .023
      }
      if(weight >= 170 && weight < 190){
          bac += .021
      }
      if(weight >= 190 && weight < 210){
          bac += .019
      }
      if(weight >= 210 && weight < 230){
          bac += .017
      }
      if(weight >= 230){
          bac += .016
      }

  }
  if(sex === "female"){
      if(weight >= 90 && weight < 110){
          bac += .045
      }
      if(weight >= 110 && weight < 130){
          bac += .038
      }
      if(weight >= 130 && weight < 150){
          bac += .032
      }
      if(weight >= 150 && weight < 170){
          bac += .028
      }
      if(weight >= 170 && weight < 190){
          bac += .025
      }
      if(weight >= 190 && weight < 210){
          bac += .023
      }
      if(weight >= 210 && weight < 230){
          bac += .021
      }
      if(weight >= 230){
          bac += .019
      }

  }
  // console.log(bac)
  // var current = moment()
  // var difference = startTime.diff(current, "minutes")
  // console.log(difference)
  // difference *= (.015/60)
  // bac -= difference
  // if(bac < 0){
  //     bac = 0
  // }
  //console.log(bac)


    //console.log("pressed")
    bac = parseFloat(bac.toFixed(3))
    this.setState({bac: bac}, this.bacDecay(bac))
}

createdDrink = (oz, alcPercent) =>{
  let bac = this.state.bac
  let sex = this.state.sex
  let weight = this.state.weight
  if(sex === "male"){
      let addedBac = (.071*(oz)*(alcPercent))/(weight)
      bac = addedBac + bac
  }
  if(sex === "female"){
      let addedBac = (.085*(oz)*(alcPercent))/(weight)
      bac = addedBac + bac
  }
  this.setState({bac: bac}, this.bacDecay(bac))
}
//this function could be used to update the time till sober
update = () =>{
  let bac = this.state.bac
  this.bacDecay(bac)
}
bacDecay = (tbac) =>{
  var moment = require('moment');
  moment().format();
  var minutes = 0
  //not using state for tbac since state is asynchronous and will not update immediately, which was leading to the time present always one drink behind
  //let tbac = this.state.bac
    //bac reduces at .015 an hour
    //legally sober at .08 bac
    //need to take start time of session, then find the amount of time until bac = 0 at the pace of .015 an hour.
    var bacReductionPerMinute = .015/60
    console.log(bacReductionPerMinute)
    while(tbac > .08){
        tbac -= bacReductionPerMinute
        minutes += 1
    }
    console.log(minutes)

    //takes current time then adds the amount of minutes until sober, formats into hour:minutes AM/PM
    var TimeOfSober = moment().add(minutes, "minutes").format("hh:mm a")
    console.log(TimeOfSober)

    //finds difference in minutes between current time and time will sober, though all of this is unnecessary since the minutes variable already knows this information....
    var TimeTillSober = moment().add(minutes, "minutes")
    var current = moment()
    console.log(TimeTillSober.diff(current, "minutes"))
    this.setState({tts: TimeOfSober})
    console.log(this.state.tts)
}


  render() {
    return (
      <div>
        <Nav />
        <div className="container">
        <div className="row">
            <Link to="/profile" className={window.location.pathname === "/profile"
                ? "nav-link active" : "nav-link"
            }>Profile
            </Link>
          </div>
          <div className="row">
            <BAC bac={this.state.bac} tts={this.state.tts} />
          </div>
          <div className="row">
            <DrinkSession />
          </div>
          <div className="row">
            <DrinkBtn bac={this.props.bac} Drink={this.Drink} name="beer"/>
            <DrinkBtn/>
            <DrinkBtn/>
            <DrinkBtn/>
          </div>
          <div className="row">
            <Link to="/end" className={window.location.pathname === "/end"
                ? "nav-link active" : "nav-link"
            }><EndBtn />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Sessions;
