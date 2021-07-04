import React from "react"
import "./Nav.css";



const Nav = function (props) {

  const noUser = <div class="navbar-nav">
    <a class="nav-item nav-link" href="/login">Login</a>
    <a class="nav-item nav-link" href="/register">Register</a> 
    </div>;

  const yesUser =  <a class="navbar-brand user-display" >Hardcoded User</a>;

  const myTimelines = <div class="navbar-nav">
      <a class="nav-item nav-link" href="/timelines/new">+ NEW TIMELINE</a>
      <a class="nav-item nav-link" href="/timelines">MY TIMELINES</a>
    </div>


  return (

        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
          <a class="navbar-brand" href="/">THE TIMELINE GANG</a>
                 
          <div class="collapse navbar-collapse" >
            {props.user_id ? myTimelines : <div></div>}
            
          </div>

          {props.user_id ? yesUser : noUser}
          
        </nav>
    


  )
}

export default Nav;