import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

/* eslint-disable */
const Naviagtion = () => {
  return (
    <nav className={classes.nav}>
      <ul className={classes.link_items}>
        <li>
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/calculator" className={classes.link}>
            Calculator
          </Link>
        </li>
        <li>
          <Link to="/qoute" className={classes.link}>
            Qoute
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Naviagtion;
