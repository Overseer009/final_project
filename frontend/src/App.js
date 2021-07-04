import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Form'
import Nav from './components/Nav'
import TimelineCard from './components/Cards/TimelineCard';



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
    <body>
      <Nav user_id={true} />
      <main className="App">
        <div>
          <Form
            registerUser={registerUser}
          />
        </div>
        <div>
        <TimelineCard />
      </div>
      </main>
    </body>
  );
}

export default App;