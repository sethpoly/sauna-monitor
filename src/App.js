import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';

function App() {

  function refreshPage() {
    window.location.reload(false);
    //console.log("WOW");
  }

  return (
    <Router>
      <Navbar onClick={refreshPage}/>
      <Routes>
        <Route path='/' exact Component={Home}/>
      </Routes>
    </Router>
  );
}

export default App;
