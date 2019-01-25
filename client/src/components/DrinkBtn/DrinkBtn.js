import React, {Component} from "react";
import "./DrinkBtn.css";

import { Button } from "react-materialize";
 
class DrinkBtn extends Component {
    render(){
    return (
      <div className="button"><div onClick={this.props.Drink}> {this.props.name}</div></div> 
    )
}
}

export default DrinkBtn;