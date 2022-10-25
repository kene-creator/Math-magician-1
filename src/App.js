/* eslint-disable */
import Calculate from './components/calculator/calculator.js';
import classes from './components/calculator/calculator.module.css';

function App() {
  return (
    <div>
      <Calculate className={classes.container} />
    </div>
  );
}

export default App;
