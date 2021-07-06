import "./App.css";
import { useEffect, useState, Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import axios from "axios";
import Login from "./components/logister/Login";
import Register from "./components/logister/Register";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import TimelineCard from "./components/Cards/TimelineCard";
import InstanceCard from "./components/Cards/InstanceCard";

function App() {
  const history = useHistory();
  const [stuff, setStuff] = useState();

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
        window.location = "/timelines/new";
      }
    });
  };

  const logout = () => {
    console.log("inside logout");
    localStorage.clear();
    window.location = "/login";
  };

  const loginUser = (loginData) => {
    console.log("this is line 47 app.js", loginData);

    axios
      .post("/api/users", loginData)
      .then((res) => {
        console.log("inside loginInfo", res.data);
        if (res.data) {
          localStorage.setItem("currentUser", JSON.stringify(res.data));
          // history.push("/timelines/new");
          window.location = "/timelines/new";
        }
      })
      .catch((err) => console.log("Invalid User: ------>", err));
  };

  const createInstance = (instanceData) => {
    console.log("Inside createInstance --------- ", instanceData);

    axios.post("/api/instances/new", instanceData).then((res) => {
      console.log("Inside new Instance POST request -------- ", res.data);
      window.location = "/timelines/new";
    });
  };

  let currentUser = localStorage.getItem("currentUser");

  currentUser = JSON.parse(currentUser);
  
  const timelineData = (timelineObj) => {
    console.log("timeline data:----->", timelineObj);
    
    axios
      .post("/api/timelines", timelineObj)
      .then((res) => {
        console.log("timeline info sending", res.data)
      })
  }

  return (
    <main className="App">
      <Router>
        <Nav user_id={true} logout={logout} />
        {currentUser && (
          <Sidebar
            createInstance={createInstance}
            timelineName={"Timeline Name"}
          />
        )}
        {/* <InstanceCard /> */}
        <Switch>
          <Route path="/login">
            <Login loginUser={loginUser} />
          </Route>
          <Route path="/timelines/new">
            <TimelineCard timelineData={timelineData}/>
          </Route>
          <Route path="/register">
            <Register registerUser={registerUser} />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
