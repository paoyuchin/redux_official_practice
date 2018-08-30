import React from "react";
import {connect} from 'react-redux';
import { add_Todo} from '../actions';

const AddTodo = ({dispatch}) =>{
    let input;
return (
  <div>
    <form onSubmit={(e)=>{
        e.preventDefault();
            dispatch(add_Todo(input.value))
    }}>
      <input ref={node => (input = node)} />
      <button type="submit">Send</button>
    </form>
  </div>
);
};

export default connect()(AddTodo)
