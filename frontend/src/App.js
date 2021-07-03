import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {
  
  const [stuff, setStuff] = useState();

  useEffect(() => {
    Promise.all([
      axios.get('/users'),
      axios.get('/instances'),
      axios.get('/instance_colours'),
      axios.get('/timelines')
    ]).then(all => {
      console.log(all[0].data, all[1].data, all[2].data, all[3].data);
      const [users, instances, instance_colours, timelines] = all;
      console.log("lz:", users.data)
      setStuff({
        users: users.data,
        instances: instances.data,
        instance_colours: instance_colours.data,
        timelines: timelines.data
    })
    })
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        {stuff ? <h1>we are in {stuff.users.map(user => (user.name)).join(", ")}</h1> : <div></div>}
        {stuff ? <h1>we are in {stuff.instances.map(instance => (instance.name)).join(", ")}</h1> : <div></div>}
        {stuff ? <h1>we are in {stuff.instance_colours.map(instance_colour => (instance_colour.colour)).join(", ")}</h1> : <div></div>}
        {stuff ? <h1>we are in {stuff.timelines.map(timeline => (timeline.name)).join(", ")}</h1> : <div></div>}
      </header>
    </div>
  );
}

export default App;