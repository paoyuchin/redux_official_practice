//reducer 是一個 pure function，它接收先前的 state 和一個 action，然後回傳下一個 state。
//reducer is a pure function, which receive prev state and action, then return a new state
//你永遠不應該在 reducer 裡面做這些事：
// A改變它的參數
// B執行有 side effect 的動作，像是呼叫 API 和 routing 轉換。
// C呼叫不是 pure 的 function，像是 Date.now() 或是 Math.random() 。

import { combineReducers } from "redux";
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
  todos,
  visibilityFilter
});
