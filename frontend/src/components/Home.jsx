import React from "react";
import "./Home.css";

const Home = function () {
  let currentUser = localStorage.getItem("currentUser");
  currentUser = JSON.parse(currentUser);

  const yesUser = (
    <div className="intro-container">
      <p className="intro">
        Organize and track important events with the help of our dynamic
        timelines. Researching a subject? Documenting an event? Or planning your
        next big trip? Our timelines are here to help you.
      </p>
      <p className="invitation">Login to see what you're tracking.</p>
    </div>
  );
  const noUser = (
    <div className="intro-container">
      <p className="intro">
        Organize and track important events with the help of our dynamic
        timelines. Researching a subject? Documenting an event? Or planning your
        next big trip? Our timelines are here to help you.
      </p>
      <p className="invitation">
        New to timelines? Register with us to start organizing your events!
      </p>
    </div>
  );
  return (
    <div className="homepage">
      <div className="welcome">Welcome to the Timeliner</div>

      {currentUser ? yesUser : noUser}
    </div>
  );
};

export default Home;
