import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          //dispach a actioncreator
          console.log(input.value)
          input.value = "";
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);

//兩個參數 1. 來自store的state 2. 會dispatch action給reducer的function
//behind scene dispatch