import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'
import Character from './components/Character'
import CharacterInfo from './components/CharacterInfo'


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [charList, setCharList] = useState([]);
  // const [charUrl, setCharUrl] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // const openInfo = url => {
  //   setCharUrl(url)
  // }

  // const closeInfo = url => {
  //   setChar(null)
  // }

  
  useEffect(() => {
    axios
      .get('https://swapi.dev/api/people/')
      .then((res) => {
        setCharList(res.data) //array of objects
        })
      .catch((err) => {
        console.log(err)
      })
  },[])



  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        charList.map(char => {
          return <Character key={char.url} character={char} />
        })
      }
    </div>
  );
}

export default App;
