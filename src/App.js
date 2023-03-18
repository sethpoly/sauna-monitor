import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';

function App() {

  function refreshPage() {
    window.location.reload(false);
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
