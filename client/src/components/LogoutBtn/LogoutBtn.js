import React, {Component} from "react"
import { SideNavItem } from "react-materialize";

class LogoutBtn extends Component {

    goTo(route) {
        this.props.history.replace(`/${route}`)
      }
    
      login() {
        this.props.auth.login();
      }
    
      logout() {
        this.props.auth.logout();
      }

    render(){
        return(
        <SideNavItem onClick={this.logout.bind(this)}>LogOut</SideNavItem>
        )}

}

export default LogoutBtn