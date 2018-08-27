import React from "react";
import { connect } from "react-redux";
import {addTodo} from '../actions'

// dispatch behind scene
const AddTodo = ({ dispatch}) => {
  let input;
  return (
    <div>
      <form onSubmit={(e)=>{
          e.preventDefault();
          dispatch(addTodo(input.value))
      }}>
        <input type='text' ref={node => (input = node)}  />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
//兩個參數 1. 來自store的state 2. 會dispatch action給reducer的function
//behind scene dispatch