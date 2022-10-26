import React from 'react';
import classes from './Button.module.css';

const Button = (props) => (
  <button
    className={`${classes.btn} ${classes.btn_grey} ${props.className}`}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

export default Button;
