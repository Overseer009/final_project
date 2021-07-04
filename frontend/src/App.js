import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Form from './components/Form'



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
      <header className="App-header">
      {stuff ? <h1>we are in {stuff.users.name}</h1> : <h1>"hello"</h1>}
      </header>
      <div>
        <Form
          registerUser={registerUser}
        />
      </div>
    </main>
  );
}

export default App;