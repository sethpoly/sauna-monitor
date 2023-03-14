import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useEffect, useRef, useState } from "react";
import { getTemperature } from './utils/firebase.js'
import { db } from './utils/firebase.js'

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
  }, "");

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Temperature = {temp.current_temp}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
