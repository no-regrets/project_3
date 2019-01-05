import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  return (
    <div>
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <a href="#!" className="brand-logo">No Regrets</a>
            <a href="#!" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul className="right hide-on-med-and-down">

              {/* User's Link */}

              <li>
                <Link to="/"
                  className={
                    window.location.pathname === "/" || window.location.pathname === "/users"
                      ? "nav-link active" : "nav-link"
                  }>
                  Users
                </Link>
              </li>

              {/* Session's Link */}

              <li>
                <Link to="/sessions"
                  className={
                  window.location.pathname === "/sessions"
                      ? "nav-link active" : "nav-link"
                  }>
                  Sessions
                  </Link>
              </li>
              <li>
                <Link to="/drinks"
                  className={
                  window.location.pathname === "/drinks"
                      ? "nav-link active" : "nav-link"
                  }>
                  Drinks
          </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* <ul className="sidenav" id="mobile-demo">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">Javascript</a></li>
        <li><a href="mobile.html">Mobile</a></li>
      </ul> */}
    </div>
  )
}

export default Nav;
