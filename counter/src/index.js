import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counter from './reducers/index'
import Counter from './components/Counter'



const store = createStore(counter)

const render = () => ReactDOM.render(
  <Counter 
    value={store.getState()}
    inCrement={() => { store.dispatch({type: 'INCREMENT'}) , console.log('+')}}
    onDecrement={() => { store.dispatch({ type: 'DECREMENT' }), console.log('-') }}
  />,
  document.getElementById('root')
)

render()
store.subscribe(render)


//this is the most simple redux works.
//應該是由 Provider 餵store 進去給整個應用
//這裡用的方式是 getState()  subscribe()
//應該由actionCreater發送一個action給reducer 
// 不過這裡寫的方式不太懂
//不太懂
