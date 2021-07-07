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

function App() {
  const [currentTimeline, setCurrentTimeline] = useState({
    user_id: null,
    name: null,
    start_month: null,
    end_month: null,
  });

  const history = createBrowserHistory();

  useEffect(() => {
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/instances"),
      axios.get("/api/instance_colours"),
      axios.get("/api/timelines"),
    ]).then((all) => {});
  }, []);

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
    console.log("this is line 47 app.js", loginData);

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

  let currentUser = localStorage.getItem("currentUser");

  currentUser = JSON.parse(currentUser);

  const timelineData = (timelineObj) => {
    console.log("timeline data:----->", timelineObj);

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
  console.log("outside func: ====>", currentTimeline);

  //receiving start and end points for timeline
  //start  middle1  middle2  middle3  ...    end

  return (
    <main className="App">
      {/*  */}

      <Router history={history}>
        {currentUser && (
          <Sidebar
            createInstance={createInstance}
            currentTimeline={currentTimeline}
          />
        )}
        {/* <InstanceCard /> */}
        <Switch>
          <Route path="/timelines/new">
            <TimelineCard timelineData={timelineData} />
            <Nav user_id={true} logout={logout} />
          </Route>
          <Route exact path="/timeline">
            <Timeline currentTimeline={currentTimeline} />
            <Nav user_id={true} logout={logout} />
          </Route>
          <Route path="/login">
            <Login loginUser={loginUser} />
            <Nav user_id={true} logout={logout} />
          </Route>
          <Route path="/register">
            <Register registerUser={registerUser} />
            <Nav user_id={true} logout={logout} />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
