/* eslint-disable */
import Calculate from './components/calculator/Calculate.js';
import classes from './components/calculator/Calculate.module.css';
import { Component } from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Naviagtion from './components/UI/Navigation.js';
import Home from './pages/Home.js';
import Qoute from './pages/Qoute.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Naviagtion />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/calculator"
            element={<Calculate className={classes.containers} />}
          ></Route>
          <Route path="/qoute" element={<Qoute />}></Route>
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
