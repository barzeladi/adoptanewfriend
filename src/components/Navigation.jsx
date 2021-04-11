import React from "react";
import { Link, withRouter } from "react-router-dom";


function Navigation(props) {
  return (


    <div className="navigation">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" href="/">Adopt a new friend</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              
              
              <li className={`nav-item  ${props.location.pathname === "/" ? "active" : ""
                }`}>
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>

              <li className={`nav-item  ${props.location.pathname === "/animals" ? "active" : ""
                }`}>
                <Link className="nav-link" to="/animals">All Animals</Link>              
              </li>

              <li className={`nav-item  ${props.location.pathname === "/dogs" ? "active" : ""
                }`}>
                <Link className="nav-link" to="/dogs">Dogs</Link>
              </li>

              <li className={`nav-item  ${props.location.pathname === "/cats" ? "active" : ""
                }`}>
                <Link className="nav-link" to="/cats">Cats</Link>              
              </li>




              <li className={`nav-item  ${props.location.pathname === "/contact" ? "active" : ""
                }`}>
                <Link className="nav-link" to="/contact">Contact Us</Link>
              </li>

              <li className={`nav-item  ${props.location.pathname === "/fosterhomes" ? "active" : ""
                }`}>
                <Link className="nav-link" to="/fosterhomes">Foster Homes</Link>
              </li>


              </ul>
              <ul>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>Login</Link>
                </li>
                </ul>
                <ul>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                </li>
                </ul>           
          </div>
        </div>
      </nav>
    </div>
  );
}
















export default withRouter(Navigation);

