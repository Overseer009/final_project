import "./App.css";
import React from "react";
import { Router, Route, Switch, Redirect, Link } from "react-router-dom";

//Components
import Login from "./components/logister/Login";
import Register from "./components/logister/Register";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import TimelineCard from "./components/Cards/TimelineCard";
import InstanceCard from "./components/Cards/InstanceCard";
import Timeline from "./components/Timeline";
import TimelineItem from "./components/TimelineItem";
import MyTimelines from "./components/MyTimelines";
import AddInstance from "./components/AddInstance";

//Hooks
import useApplicationData from "./hooks/useApplicationData";

function App() {
  const {
    getUserTimelines,
    registerUser,
    logout,
    loginUser,
    createInstance,
    getInstances,
    timelineData,
    setCurrentTimeline,
    localCurrentTimeline,
    history,
    currentUser,
  } = useApplicationData();

  return (
    <main className="App">
      <Router history={history}>
        <Switch>
          {currentUser ? (
            <Route path="/timeline">
              <Timeline
                getInstances={getInstances}
                currentTimeline={localCurrentTimeline}
              />

              <Nav
                user_id={true}
                logout={logout}
                getUserTimelines={getUserTimelines}
              />
            </Route>
          ) : (
            history.push("/login")
          )}
          ;
          {currentUser ? (
            <Route exact path="/mytimelines">
              <MyTimelines setCurrentTimeline={setCurrentTimeline} />
              <Nav
                user_id={true}
                logout={logout}
                getUserTimelines={getUserTimelines}
              />
            </Route>
          ) : (
            history.push("/login")
          )}
          ;
          <Route path="/timelines/new">
            <TimelineCard timelineData={timelineData} />
            <Nav
              user_id={true}
              logout={logout}
              getUserTimelines={getUserTimelines}
            />
          </Route>
          <Route exact path="/login">
            <Login loginUser={loginUser} />
            <Nav
              user_id={true}
              logout={logout}
              getUserTimelines={getUserTimelines}
            />
          </Route>
          <Route path="/register">
            <Register registerUser={registerUser} />
            <Nav
              user_id={true}
              logout={logout}
              getUserTimelines={getUserTimelines}
            />
          </Route>
          <Route path="/instancecard">
            <Nav
              user_id={true}
              logout={logout}
              getUserTimelines={getUserTimelines}
            />
            <InstanceCard />
          </Route>
          <Route path="/addinstance">
            <Nav
              user_id={true}
              logout={logout}
              getUserTimelines={getUserTimelines}
            />
            <AddInstance createInstance={createInstance} />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
