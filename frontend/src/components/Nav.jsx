import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Nav = function (props) {
  let currentUser = localStorage.getItem("currentUser");

  currentUser = JSON.parse(currentUser);
  // console.log(currentUser.id)

  let currentTimeline = localStorage.getItem("currentTimeline");
  currentTimeline = JSON.parse(currentTimeline);

  const noUser = (
    <div className="navbar-nav">
      <Link className="nav-item nav-link" to="/login">
        Sign In |
      </Link>
      <Link className="nav-item nav-link" to="/register">
        | Register
      </Link>
    </div>
  );

  const yesUser = (
    <div className="navbar-nav">
      <p id="user-display">
        {currentUser ? `Welcome, ${currentUser.name}` : ""}
      </p>
      <span className="nav-item nav-link" onClick={(event) => props.logout()}>
        Log out
      </span>
    </div>
  );

  const myTimelines = (
    <div className="navbar-nav">
      <Link className="nav-item nav-link" to="/timelines/new">
        <div className="new-timeline">
          <div className="plus"><FontAwesomeIcon icon={faPlus}/></div>
          &nbsp;New Timeline 
        </div>

      </Link>
      <div
        className="nav-item nav-link"
        onClick={() => props.getUserTimelines(currentUser)}
      >
        My Timelines
      </div>

      {!currentTimeline ? (
        <div></div>
      ) : (
        <div>
          <Link className="nav-item nav-link" to="/timeline">
            {currentTimeline.name}
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" id="nav">
      <span ><Link className="nav-appName"  to="/">Timeliner</Link></span>
      {/* <a className="navbar-brand" href="/">
        
      </a> */}

      <div className="collapse navbar-collapse">
        {currentUser ? myTimelines : <div></div>}
      </div>

      {currentUser ? yesUser : noUser}
    </nav>
  );
};

export default Nav;
