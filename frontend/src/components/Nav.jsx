import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = function (props) {
  
  let currentUser = localStorage.getItem("currentUser");

  currentUser = JSON.parse(currentUser);
  // console.log(currentUser.id)

  const noUser = (
    <div className="navbar-nav">
      <Link className="nav-item nav-link" to="/login">
        Login
      </Link>
      <Link className="nav-item nav-link" to="/register">
        Register
      </Link>
    </div>
  );

  const yesUser = (
    <div className="navbar-nav">
      <a className="navbar-brand user-display">
        {currentUser ? `Welcome, ${currentUser.name}` : ""}
      </a>
      <button className="nav-item nav-link" onClick={(event) => props.logout()}>
        Log out
      </button>
    </div>
  );

  const myTimelines = (
    <div className="navbar-nav">
      <Link className="nav-item nav-link" to="/timelines/new">
        + New Timeline
      </Link>
      <div className="nav-item nav-link" onClick={() => props.getUserTimelines(currentUser)}>
        MY TIMELINES
      </div>
    </div>
  );

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark" id="nav">
      <span style={{color: "white"}}>THE TIMELINE GANG</span>
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
