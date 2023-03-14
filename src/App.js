import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useEffect, useRef, useState } from "react";
import { getTemperature } from './utils/firebase.js'
import { formatTimestamp } from './utils/formatter';

function App() {

  const [temp, setTemp] = useState({
    current_temp: '',
    last_timestamp: ''
  });

  useEffect(() => {
    getTemperature()
    .then((snap) => {
      if(snap.exists()) {
        setTemp(snap.data());
        console.log("Document data: ", snap.data());
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Temperature = {temp.current_temp}</p>
        <p>last updated {formatTimestamp(temp.last_timestamp)}</p>
      </header>
    </div>
  );
}

export default App;
