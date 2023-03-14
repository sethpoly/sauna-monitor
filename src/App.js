import logo from './logo.svg';
import './App.css';
import React from 'react'
import { useEffect, useRef, useState } from "react";
import { getTemperatureRef } from './utils/firebase.js'
import { formatTimestamp } from './utils/formatter';
import { db } from './utils/firebase.js';
import { getDoc, doc } from 'firebase/firestore';
import { onSnapshot } from 'firebase/firestore';

function App() {

  const [tempSensor, setTempSensor] = useState({
    current_temp: '',
    last_timestamp: ''
  });

  useEffect(() => {
    const unsub = onSnapshot(getTemperatureRef(), (snapshot) => {
      if(snapshot.exists) {
        setTempSensor(snapshot.data());
      } 
    });
    return () => {
      unsub();
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Temperature = {tempSensor.current_temp}</p>
        <p>last updated {formatTimestamp(tempSensor.last_timestamp)}</p>
      </header>
    </div>
  );
}

export default App;
