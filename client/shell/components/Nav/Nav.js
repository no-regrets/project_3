import React, { Component } from "react";
import "./Nav.css"
import { Link } from "react-router-dom";

import BAC from "../BAC/BAC";


class Nav extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">

          {/* No Regrets Title */}

          <span className="brand-logo">No Regrets</span>

          {/* Nav List */}

          <ul id="nav-mobile" className="right hide-on-med-and-down">

            {/* Sessions Link */}

            <li><Link to="/sessions" className={
              window.location.pathname === "/sessions"
                ? "nav-link active" : "nav-link"
            }> Sessions
              </Link>
              or

            </li>

            {/* Drinkory Link */}

            <li><Link to="/drinkory" className={
              window.location.pathname === "/drinkory"
                ? "nav-link active" : "nav-link"
            }> Drinkory
              </Link></li>
          </ul>
        </div>
      </nav>

    )
  }

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