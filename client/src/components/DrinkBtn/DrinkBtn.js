import React, {Component} from "react";
import "./DrinkBtn.css";

import { Button } from "react-materialize";
 
class DrinkBtn extends Component {
    render(){
    return (
      <div><Button onClick={this.props.Drink}> {this.props.name}</Button></div> 
    )
}
}

export default DrinkBtn;