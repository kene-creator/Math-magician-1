import { Component } from 'react';
import classes from './Calculate.module.css';
import calculate from '../../logic/calculate.js';

class Calculate extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {};
    this.clickHandler = this.clickHandler.bind(this);
    console.log(this);
  }

  clickHandler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const { next, total, operation } = this.state;
    console.log(next, total, operation);
    console.log(this.clickHandler);
    return (
      <div className={this.props.className}>
        <div className={classes.calculator}>
          <div className={classes.row1}>{next || total || operation || 0}</div>
          <div className={classes.row}>
            <div
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              AC
            </div>
            <div
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              +/-
            </div>
            <div
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              %
            </div>
            <div
              className={`${classes.btn} ${classes.btn_orange}`}
              onClick={this.clickHandler}
            >
              +
            </div>
          </div>
          <div className={classes.row}>
            <div
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              7
            </div>
            <div
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              8
            </div>
            <div
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              9
            </div>
            <div
              className={`${classes.btn} ${classes.btn_orange}`}
              onClick={this.clickHandler}
            >
              x
            </div>
          </div>
          <div className={classes.row}>
            <div
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              4
            </div>
            <div
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              5
            </div>
            <div
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              6
            </div>
            <div
              className={`${classes.btn} ${classes.btn_orange}`}
              onClick={this.clickHandler}
            >
              -
            </div>
          </div>
          <div className={classes.row}>
            <div
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              1
            </div>
            <div
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              2
            </div>
            <div
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              3
            </div>
            <div
              className={`${classes.btn} ${classes.btn_orange}`}
              onClick={this.clickHandler}
            >
              ÷
            </div>
          </div>
          <div className={classes.row}>
            <div
              className={`${classes.btn} ${classes.btn_0} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              0
            </div>
            <div
              className={`${classes.btn} ${classes.btn_grey}`}
              onClick={this.clickHandler}
            >
              .
            </div>
            <div
              className={`${classes.btn} ${classes.btn_orange}`}
              onClick={this.clickHandler}
            >
              =
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculate;
