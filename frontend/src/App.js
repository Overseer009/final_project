import "./App.css";
import { useEffect, useState, Component } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import axios from "axios";
import Login from "./components/logister/Login";
import Register from "./components/logister/Register";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";
import TimelineCard from "./components/Cards/TimelineCard";
import InstanceCard from "./components/Cards/InstanceCard";

function App() {
  const [stuff, setStuff] = useState();

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    Promise.all([
      axios.get("/api/users"),
      axios.get("/api/instances"),
      axios.get("/api/instance_colours"),
      axios.get("/api/timelines"),
    ]).then((all) => {
      const [users, instances, instance_colours, timelines] = all;
      console.log("line 21 ------ :", users.data);
      setStuff({
        users: users.data,
        instances: instances.data,
        instance_colours: instance_colours.data,
        timelines: timelines.data,
      });
    });
  }, []);

  if (stuff) {
    console.log(stuff.users.email);
  }

  const registerUser = async (name, email, password) => {
    console.log("in reggy!");
    const userInfo = {
      name,
      email,
      password,
    };

    axios.post(`/api/users`, userInfo).then((res) => {
      console.log("inside regeisterUser", res);
    });
  };

  const loginInfo = (loginData, event) => {
    event.preventDefault();
    console.log("this is line 47 app.js", loginData);

    axios
      .post("/api/users", loginData)
      .then((res) => {
        console.log("inside loginInfo", res);
        if (res.data) {
          setCurrentUser({
            ...currentUser,
            id: res.data.id,
            name: res.data.name,
            email: res.data.email,
            password: res.data.password,
          });
        }
      })
      .catch((err) => console.log("Invalid User: ------>", err));
  };

  return (
    <main className="App">
      <Router>
        <Nav user_id={true} />
        <Sidebar timelineName={"Timeline Name"} />
        <InstanceCard />
        <Switch>
          <Route path="/login">
            {currentUser.id === null && ( 
              <Login
                users={stuff ? stuff.users : "nope"}
                loginInfo={loginInfo}
                setCurrentUser={setCurrentUser}
              />
            )}
          </Route>
          <Route path="/timelines/new">
            <TimelineCard />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

export default App;
