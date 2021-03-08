import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Counter.css'

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter : 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    render() {
        return (
            <div className="App"> 
              <CounterButton by={1} //each of child component
              incrementMethod={this.increment} 
              decrementMethod={this.decrement}/>  
              <CounterButton by={5} 
              incrementMethod={this.increment}
              decrementMethod={this.decrement}/>
              <CounterButton by={10} 
              incrementMethod={this.increment}
              decrementMethod={this.decrement}/> 
              <span className="count">{this.state.counter}</span>
              <div><button className="reset" onClick={this.reset}>Reset</button></div>
              
            </div>
          ); 
    }

    increment(by) {
        //console.log(`increment from parent - ${by}`)
        this.setState(
            (prevState) => {
            return {counter: prevState.counter + by}
            }
        );
    }
    decrement(by) {
       // console.log("decrement from parent")
       this.setState(
            (prevState) => {
            return {counter: prevState.counter - by}
            }
        );
    }

    reset ()  {
        this.setState (
            (prevState) => {
            return {counter: 0}
            }
        );
    }
}

class CounterButton extends Component {
     constructor() {
         super();
    //     this.state = {
    //         counter : 0
    //     }

    //     this.increment = this.increment.bind(this);
    //     this.decrement = this.decrement.bind(this);
     }
    render ()  {
        return (
            <div className="counter">
            <button id="UP" onClick={() => this.props.incrementMethod(this.props.by )}>+{this.props.by}</button>
            <button id="DOWN" onClick={() => this.props.decrementMethod(this.props.by )}>-{this.props.by}</button>
            {/*<span className="count">{this.state.counter}</span>*/}
            </div>
        )
    }

    // increment ()  {
    //     this.setState ({
    //         counter: this.state.counter + this.props.by
    //     });
    //     this.props.incrementMethod(this.props.by);//여기서 개별 연산외에도 전체연산 실행
    // }

    // decrement  ()  {
    //     this.setState ({
    //         counter: this.state.counter - this.props.by
    //     });

    //     this.props.decrementMethod(this.props.by);
    // }
}

/*
class ResetButton extends Component {
    constructor() {
        super();
        this.reset = this.reset.bind(this);
    }
    render ()  {
        return (
            <div className="counter">
            <button id="Reset" onClick={this.reset}>RESET</button>
            </div>
        )
    }
    reset () {
        this.props.ResetMethod();
    }
}
*/
Counter.defaultProps = {
    by : 1
}

Counter.propTypes = {
    by : PropTypes.number
}

export default Counter;