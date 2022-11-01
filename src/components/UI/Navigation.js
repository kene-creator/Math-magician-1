/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "Link" }] */
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';

const Naviagtion = () => (
  <nav className={classes.nav}>
    <Link to="/" className={classes.nav_header}>
      Math Magician
    </Link>
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

export default Naviagtion;
