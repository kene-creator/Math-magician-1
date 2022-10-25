/* eslint-disable */
import Calculate from './components/calculator/Calculator.js';
import classes from './components/calculator/Calculator.module.css';

function App() {
  return (
    <div>
      <Calculate className={classes.container} />
    </div>
  );
}

export default App;
