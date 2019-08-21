import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import Nav from './nav.js';
import Header from './Header.js';
import Sidebar from './sidebar.js';
import Content from './content.js';

function App() {
  return (
    <div className="App">
    <Header/> 
    <Nav/>
    <Sidebar/>
    <Content/>      
    </div>
  );

}

export default App;
