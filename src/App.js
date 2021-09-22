import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';
import Main from './main.js';


const App = () => {
  const urlAPI ='https://catfact.ninja/fact';
  const [fact, setFact] = useState([]);

  useEffect(() => {
    axios.get(urlAPI).then(res => {
      setFact(res.data.fact);
    })
  }, [])

 

  return (
    <div className="App">
      <Main fact ={fact}/>     
    </div>
  )

}


export default App;
