import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {
  
  const [stuff, setStuff] = useState([]);

  useEffect(() => {
    axios.get('/test1').then(res => {
      console.log(res.data);
      setStuff(res.data);
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>we are in {stuff.fruit} and {stuff.vege}</h1>
        
      </header>
    </div>
  );
}

export default App;
