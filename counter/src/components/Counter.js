import React, { Component } from 'react'

class Counter extends Component {
  constructor(props) {
    super(props);
  }
  inCrement() {
    this.props.inCrement();
  }

  onDecrement(){
    setTimeout(() => {
      this.props.onDecrement();
    }, 1000);
  }
  render() {
    const { value, inCrement, onDecrement }=this.props

    return (
      <div>
        <p>
          I just clicked : {value} times!
        </p> 
        <br/>
        <button onClick={onDecrement}>-</button>
        <button onClick={() => this.onDecrement()}>onDecrement</button>
        <button onClick={inCrement}>+</button>
        <button onClick={() => this.inCrement()}>inCrement</button>
        <br />
        
        <br />
      </div> 
    )
  }
}


export default Counter;
