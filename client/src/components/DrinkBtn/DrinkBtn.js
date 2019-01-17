import React, {Component} from "react";
import "./DrinkBtn.css";

import { Button } from "react-materialize";
 
class DrinkBtn extends Component {
    render(){
    return (
        <Button onClick={this.props.Drink}> {this.props.name}</Button>
    )
}
}

export default DrinkBtn;