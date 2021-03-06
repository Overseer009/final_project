import "./App.css";
import React from "react";
import { Router, Route, Switch } from "react-router-dom";

//Components
import Login from "./components/logister/Login";
import Register from "./components/logister/Register";
import Nav from "./components/Nav";
import TimelineCard from "./components/Cards/TimelineCard";
import InstanceCard from "./components/Cards/InstanceCard";
import Timeline from "./components/Timeline";
import MyTimelines from "./components/MyTimelines";
import Home from "./components/Home";
import AddInstance from "./components/AddInstance";
import EditInstance from "./components/EditInstance";

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
    editInstance,
    prependZero,
    getMonthFromString,
    formatDay,
    deleteInstance,
    deleteTimeline,
    myTimelines,
    setMyTimelines,
  } = useApplicationData();

  return (
    <section className="App-Body">
      <main className="App">
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <Nav logout={logout} getUserTimelines={getUserTimelines} />
              <Home />
            </Route>
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
                <MyTimelines
                  myTimelines={myTimelines}
                  setMyTimelines={setMyTimelines}
                  getUserTimelines={getUserTimelines}
                  deleteTimeline={deleteTimeline}
                  setCurrentTimeline={setCurrentTimeline}
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
              <InstanceCard deleteInstance={deleteInstance} />
            </Route>
            <Route path="/addinstance">
              <Nav
                user_id={true}
                logout={logout}
                getUserTimelines={getUserTimelines}
              />
              <AddInstance
                createInstance={createInstance}
                prependZero={prependZero}
                getMonthFromString={getMonthFromString}
              />
            </Route>
            <Route path="/editinstance">
              <Nav
                user_id={true}
                logout={logout}
                getUserTimelines={getUserTimelines}
              />
              <EditInstance
                editInstance={editInstance}
                prependZero={prependZero}
                getMonthFromString={getMonthFromString}
                formatDay={formatDay}
              />
            </Route>
          </Switch>
        </Router>
      </main>
    </section>
  );
}

export default App;
