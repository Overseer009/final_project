import "./App.css";
import { useEffect, useState, Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import axios from "axios";
import Login from "./components/logister/Login";
import Register from "./components/logister/Register";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import TimelineCard from "./components/Cards/TimelineCard";
import InstanceCard from "./components/Cards/InstanceCard";
import Timeline from "./components/Timeline";
import TimelineItem from "./components/TimelineItem";
import MyTimelines from "./components/MyTimelines";

const history = createBrowserHistory();

function App() {
  let currentUser = localStorage.getItem("currentUser");

  const [currentTimeline, setCurrentTimeline] = useState({
    user_id: null,
    name: null,
    start_month: null,
    end_month: null,
  });

  const [myTimelines, setMyTimelines] = useState();

  // useEffect(() => {
  //   Promise.all([
  //     axios.get("/api/users"),
  //     axios.get("/api/instances"),
  //     axios.get("/api/instance_colours"),
  //     axios.get("/api/timelines"),
  //   ]).then((all) => {});
  // }, []);

  const getUserTimelines = (user) => {
    axios.get(`/api/timelines${user.id}`).then((res) => {
      setMyTimelines(res.data);
      history.push("/mytimelines");
    });
  };
  // const dummyUser = {
  //   id: 2
  // };

  // getUserTimeLines(dummyUser);

  // const getCurrentUser = () => {
  //   let currentUser = localStorage.getItem('currentUser')
  //    return currentUser = JSON.parse(currentUser)
  // }

  const registerUser = (registerData) => {
    axios.post("/api/users/new", registerData).then((res) => {
      console.log("inside loginInfo", res);
      if (res.data) {
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        history.push("/timelines/new");
      }
    });
  };

  const logout = () => {
    console.log("inside logout");
    localStorage.clear();
    history.push("/login");
  };

  const loginUser = (loginData) => {
    axios
      .post("/api/users", loginData)
      .then((res) => {
        console.log("inside loginInfo", res.data);
        if (res.data) {
          localStorage.setItem("currentUser", JSON.stringify(res.data));
          history.push("/timelines/new");
        }
      })
      .catch((err) => console.log("Invalid User: ------>", err));
  };

  const createInstance = (instanceData) => {
    console.log("Inside createInstance --------- ", instanceData);

    axios.post("/api/instances/new", instanceData).then((res) => {
      console.log("Inside new Instance POST request -------- ", res.data);

      history.push("/timelines/new");
    });
  };

  currentUser = JSON.parse(currentUser);

  const timelineData = (timelineObj) => {
    axios
      .post("/api/timelines", timelineObj)
      .then((res) => {
        console.log("line 81:", res);
        if (res.data) {
          setCurrentTimeline({
            ...currentTimeline,
            user_id: res.data.user_id,
            name: res.data.name,
            start_month: res.data.start_month,
            end_month: res.data.end_month,
          });
          history.push("/timeline");
        } else console.log("something went wrong");
      })
      .catch((err) => console.log("nothing here---------->", err));
  };

  //receiving start and end points for timeline
  //start  middle1  middle2  middle3  ...    end

  return (
    <main className="App">
      <Router history={history}>
        {currentUser && (
          <Sidebar
            createInstance={createInstance}
            currentTimeline={currentTimeline}
          />
        )}
        {/* <InstanceCard /> */}
        <Switch>
          {currentUser ? (
            <Route exact path="/timeline">
              <Timeline currentTimeline={currentTimeline} />
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
          <Route path="/login">
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
        </Switch>
      </Router>
    </main>
  );
}

export default App;
