/* eslint-disable */
import Calculate from './components/calculator/Calculate.js';
import classes from './components/calculator/Calculate.module.css';
import { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Calculate className={classes.containers} />
      </div>
    );
  }
}

export default App;
