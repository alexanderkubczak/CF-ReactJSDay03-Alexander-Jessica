import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Nav from './nav.js';
import Header from './Header.js'

function App() {
  return (
    <div className="App">
    <Header/>
    <Nav/>  
      
    </div>
  );

}

export default App;
