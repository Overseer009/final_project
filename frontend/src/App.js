import './App.css';
import { useEffect, useState, Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import Login from './components/logister/Login';
// import Register from './components/logister/Login';
import Nav from './components/Nav';
// import Sidebar from './components/Sidebar';
import TimelineCard from './components/Cards/TimelineCard';
// import InstanceCard from './components/Cards/InstanceCard';




function App() {
  
  const [stuff, setStuff] = useState();

  useEffect(() => {
    Promise.all([
      axios.get('/api/users'),
      axios.get('/api/instances'),
      axios.get('/api/instance_colours'),
      axios.get('/api/timelines')
    ]).then(all => {
      const [users, instances, instance_colours, timelines] = all;
      console.log("line 21 ------ :", users.data)
      setStuff({
        users: users.data,
        instances: instances.data,
        instance_colours: instance_colours.data,
        timelines: timelines.data
    })
    })
  }, [])

  const registerUser = async(name, email, password) => {
    console.log("in reggy!")
    const userInfo = {
      name,
      email,
      password
    }
    
    axios.post(`/api/users`, userInfo)
      .then(res => {
        console.log("inside regeisterUser", res)
      })
  }

  
  return (
    <main className="App">
      {/* <Sidebar /> */}
      {/* <Register /> */}
      {/* <instanceCard /> */}
      <Router>
        <Nav user_id={false} />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/newtimeline' component={TimelineCard} />
        </Switch>
      </Router>
   
    </main>
  );
}

export default App;