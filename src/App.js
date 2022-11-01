/* eslint-disable */
import Calculate from './components/calculator/Calculate.js';
import classes from './components/calculator/Calculate.module.css';
import { Component } from 'react';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Naviagtion from './components/UI/Navigation.js';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Naviagtion />
        <Routes>
          <Route
            path="/"
            element={<Calculate className={classes.containers} />}
          ></Route>
        </Routes>
      </React.Fragment>
    );
  }
}

export default App;
