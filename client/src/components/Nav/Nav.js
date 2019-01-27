import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css"
import { SideNav, SideNavItem, Button } from "react-materialize";

// import { Link } from "react-router-dom";


function Nav(props) {
  let values = props.props.props
  console.log("NAV Props " + values.name)
    return (
     
      <SideNav
        trigger={<Button className="menuBtn" icon="menu" />}
        options={{ closeOnClick: true }}
      >
        <SideNavItem userView
          user={{
            // background: values.picture,
            image: values.picture,
            name: values.name,
          }}
        />
        <SideNavItem href='#!icon' icon='cloud'>
            First Item
        </SideNavItem>
        <SideNavItem href='#!second'>
            {values.name}
        </SideNavItem>
        <SideNavItem divider />
        <SideNavItem subheader>Subheader</SideNavItem>
        <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
      </SideNav>

    )
  

};

export default Nav;

    //          For Side Bar Nav, still not sure how to implement, may need to NPM Matrialize to use properly
// componentDidMount() {
//   var elem = document.querySelector(".sidenav");
//   var instance = M.Sidenav.init(elem, {
//       edge: "left",
//       inDuration: 250
//   });
// }
// render() {
//   return (
//     <div>
//       <ul id="slide-out" className="sidenav">
//         <li />
//         <li>
//           <a href="#!">
//             <i className="material-icons">cloud</i>First Link
//             With Icon
//                     </a>
//         </li>
//         <li>
//           <a href="#!">Second Link</a>
//         </li>
//         <li>
//           <div className="divider" />
//         </li>
//         <li>
//           <a className="subheader">Subheader</a>
//         </li>
//         <li>
//           <a className="waves-effect" href="#!">
//             Third Link With Waves
//                     </a>
//         </li>
//       </ul>
//       <a href="#" data-target="slide-out" className="sidenav-trigger">
//         <i className="material-icons">menu</i>
//       </a>
//     </div>
//   );
// };