import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';
import { ThemeProvider } from '@emotion/react';
import { theme } from './components/theme';

function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <ThemeProvider theme={theme}>
    <Router>
      <Navbar onClick={refreshPage}/>
      <Routes>
        <Route path='/' exact Component={Home}/>
      </Routes>
    </Router>
    </ThemeProvider>
  );
}

export default App;
