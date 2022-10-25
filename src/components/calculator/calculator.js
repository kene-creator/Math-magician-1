import { Component } from 'react';
import classes from './calculator.module.css';

class Calculate extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className={this.props.className}>
        <div className={classes.calculator}>
          <div className={classes.row1}>0</div>
          <div className={classes.row}>
            <div className={`${classes.btn} ${classes.btn_grey}`}>AC</div>
            <div className={`${classes.btn} ${classes.btn_grey}`}>+/-</div>
            <div className={`${classes.btn} ${classes.btn_grey}`}>%</div>
            <div className={`${classes.btn} ${classes.btn_orange}`}>+</div>
          </div>
          <div className={classes.row}>
            <div className={`${classes.btn} ${classes.btn_grey}`}>7</div>
            <div className={`${classes.btn} ${classes.btn_grey}`}>8/-</div>
            <div className={`${classes.btn} ${classes.btn_grey}`}>9</div>
            <div className={`${classes.btn} ${classes.btn_orange}`}>x</div>
          </div>
          <div className={classes.row}>
            <div className={`${classes.btn} ${classes.btn_grey}`}>4</div>
            <div className={`${classes.btn} ${classes.btn_grey}`}>5</div>
            <div className={`${classes.btn} ${classes.btn_grey}`}>6</div>
            <div className={`${classes.btn} ${classes.btn_orange}`}>-</div>
          </div>
          <div className={classes.row}>
            <div className={`${classes.btn} ${classes.btn_grey}`}>1</div>
            <div className={`${classes.btn} ${classes.btn_grey}`}>2</div>
            <div className={`${classes.btn} ${classes.btn_grey}`}>3</div>
            <div className={`${classes.btn} ${classes.btn_orange}`}>÷</div>
          </div>
          <div className={classes.row}>
            <div
              className={`${classes.btn} ${classes.btn_0} ${classes.btn_grey}`}
            >
              0
            </div>
            <div className={`${classes.btn} ${classes.btn_grey}`}>.</div>
            <div className={`${classes.btn} ${classes.btn_orange}`}>=</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculate;
