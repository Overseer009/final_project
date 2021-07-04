import React from "react"
import {  Link  } from 'react-router-dom';
import "./Nav.css";



const Nav = function (props) {

  const noUser = <div className="navbar-nav">
    <Link className="nav-item nav-link" to="/login">Login</Link>
    <a className="nav-item nav-link" link_to="/register">Register</a> 
    </div>;

  const yesUser =  <a className="navbar-brand user-display" >Hardcoded User</a>;

  const myTimelines = <div className="navbar-nav">
      <a className="nav-item nav-link" href="/timelines/new">+ NEW TIMELINE</a>
      <a className="nav-item nav-link" href="/timelines">MY TIMELINES</a>
    </div>


  return (

        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <a className="navbar-brand" href="/">THE TIMELINE GANG</a>
                 
          <div className="collapse navbar-collapse" >
            {props.user_id ? myTimelines : <div></div>}
            
          </div>

          {props.user_id ? yesUser : noUser}
          
        </nav>
    


  )
}

export default Nav;