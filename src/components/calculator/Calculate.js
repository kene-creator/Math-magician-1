/* eslint-disable */
import { useState } from 'react';
import classes from './Calculate.module.css';
import calculate from '../../logic/calculate.js';
import Button from '../UI/Button.js';

const Calculate = (props) => {
  const [next, setNext] = useState(0);

  const clickHandler = (e) => {
    setNext((state) => {
      return calculate(state, e.target.textContent);
    });
  };

  return (
    <div className={props.className}>
      <div className={classes.calculator}>
        <div className={classes.row1}>
          {next.next ?? next.total ?? next.operation ?? 0}
        </div>
        <div className={classes.row}>
          <Button onClick={clickHandler}>AC</Button>
          <Button onClick={clickHandler}>+/-</Button>
          <Button onClick={clickHandler}>%</Button>
          <Button className={` ${classes.btn_orange}`} onClick={clickHandler}>
            +
          </Button>
        </div>
        <div className={classes.row}>
          <Button onClick={clickHandler}>7</Button>
          <Button onClick={clickHandler}>8</Button>
          <Button onClick={clickHandler}>9</Button>
          <Button
            className={`${classes.btn} ${classes.btn_orange}`}
            onClick={clickHandler}
          >
            x
          </Button>
        </div>
        <div className={classes.row}>
          <Button onClick={clickHandler}>4</Button>
          <Button onClick={clickHandler}>5</Button>
          <Button onClick={clickHandler}>6</Button>
          <Button
            className={`${classes.btn} ${classes.btn_orange}`}
            onClick={clickHandler}
          >
            -
          </Button>
        </div>
        <div className={classes.row}>
          <Button onClick={clickHandler}>1</Button>
          <Button onClick={clickHandler}>2</Button>
          <Button onClick={clickHandler}>3</Button>
          <Button className={` ${classes.btn_orange}`} onClick={clickHandler}>
            ÷
          </Button>
        </div>
        <div className={classes.row}>
          <Button className={classes.btn_0} onClick={clickHandler}>
            0
          </Button>
          <Button onClick={clickHandler}>.</Button>
          <Button className={`${classes.btn_orange}`} onClick={clickHandler}>
            =
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Calculate;
