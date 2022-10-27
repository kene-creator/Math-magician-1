/* eslint-disable */
import { useState } from 'react';
import classes from './Calculate.module.css';
import calculate from '../../logic/calculate.js';
import Button from '../UI/Button.js';

// class Calculate extends Component {
//   constructor(props) {
//     super(props);
//     this.props = props;
//     this.state = {};
//     this.clickHandler = this.clickHandler.bind(this);
//   }

//   clickHandler(e) {
//     this.setState((state) => calculate(state, e.target.textContent));
//   }

//   render() {
//     const { next, total, operation } = this.state;
//     return (
//       <div className={this.props.className}>
//         <div className={classes.calculator}>
//           <div className={classes.row1}>{next || total || operation || 0}</div>
//           <div className={classes.row}>
//             <Button onClick={this.clickHandler}>AC</Button>
//             <Button onClick={this.clickHandler}>+/-</Button>
//             <Button onClick={this.clickHandler}>%</Button>
//             <Button
//               className={` ${classes.btn_orange}`}
//               onClick={this.clickHandler}
//             >
//               +
//             </Button>
//           </div>
//           <div className={classes.row}>
//             <Button onClick={this.clickHandler}>7</Button>
//             <Button onClick={this.clickHandler}>8</Button>
//             <Button onClick={this.clickHandler}>9</Button>
//             <Button
//               className={`${classes.btn} ${classes.btn_orange}`}
//               onClick={this.clickHandler}
//             >
//               x
//             </Button>
//           </div>
//           <div className={classes.row}>
//             <Button onClick={this.clickHandler}>4</Button>
//             <Button onClick={this.clickHandler}>5</Button>
//             <Button onClick={this.clickHandler}>6</Button>
//             <Button
//               className={`${classes.btn} ${classes.btn_orange}`}
//               onClick={this.clickHandler}
//             >
//               -
//             </Button>
//           </div>
//           <div className={classes.row}>
//             <Button onClick={this.clickHandler}>1</Button>
//             <Button onClick={this.clickHandler}>2</Button>
//             <Button onClick={this.clickHandler}>3</Button>
//             <Button
//               className={` ${classes.btn_orange}`}
//               onClick={this.clickHandler}
//             >
//               ÷
//             </Button>
//           </div>
//           <div className={classes.row}>
//             <Button className={classes.btn_0} onClick={this.clickHandler}>
//               0
//             </Button>
//             <Button onClick={this.clickHandler}>.</Button>
//             <Button
//               className={`${classes.btn_orange}`}
//               onClick={this.clickHandler}
//             >
//               =
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

const Calculate = (props) => {
  const [next, setNext] = useState(0);
  console.log(next);

  const clickHandler = (e) => {
    setNext((state) => {
      return calculate(state, e.target.textContent);
    });
  };

  return (
    <div className={props.className}>
      <div className={classes.calculator}>
        <div className={classes.row1}>
          {next.next || next.total || next.operation || 0}
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
          <Button onClick={props.clickHandler}>9</Button>
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
