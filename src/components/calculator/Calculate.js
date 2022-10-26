import { Component } from 'react';
import classes from './Calculate.module.css';
import calculate from '../../logic/calculate.js';

class Calculate extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total, operation } = this.state;
    return (
      <div className={this.props.className}>
        <div className={classes.calculator}>
          <div className={classes.row1}>{next || total || operation || 0}</div>
          <div className={classes.row}>
            <button
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              AC
            </button>
            <button
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              +/-
            </button>
            <button
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              %
            </button>
            <button
              className={`${classes.btn} ${classes.btn_orange}`}
              onClick={this.clickHandler}
            >
              +
            </button>
          </div>
          <div className={classes.row}>
            <button
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              7
            </button>
            <button
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              8
            </button>
            <button
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              9
            </button>
            <div
              className={`${classes.btn} ${classes.btn_orange}`}
              onClick={this.clickHandler}
            >
              x
            </div>
          </div>
          <div className={classes.row}>
            <button
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              4
            </button>
            <button
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              5
            </button>
            <button
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              6
            </button>
            <button
              className={`${classes.btn} ${classes.btn_orange}`}
              onClick={this.clickHandler}
            >
              -
            </button>
          </div>
          <div className={classes.row}>
            <button
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              1
            </button>
            <button
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              2
            </button>
            <button
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              3
            </button>
            <button
              className={`${classes.btn} ${classes.btn_orange}`}
              onClick={this.clickHandler}
            >
              ÷
            </button>
          </div>
          <div className={classes.row}>
            <button
              className={`${classes.btn} ${classes.btn_0} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              0
            </button>
            <button
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              .
            </button>
            <button
              className={`${classes.btn} ${classes.btn_orange}`}
              onClick={this.clickHandler}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculate;
