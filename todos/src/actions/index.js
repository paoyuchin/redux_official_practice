export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

// Action 描述實際發生一些事，不過並不指定應用程式的 state 要如何去應對改變。那是 reducer 的工作。
//action creator simply return a action
//dispatch() function 可以藉由 store.dispatch() 直接地從 store 取用，
//不過將更可能會藉由 helper 來取用它，
//例如 react-redux 的 connect()。你可以使用 bindActionCreators() 來自動綁定許多 action creator 到一個 dispatch() function。
let nextTodoId = 0;

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}
//action creator

export const add_Todo = (text) => {
    return {type:ADD_TODO , text}
};

export const toggleTodo = (index) => {
    return { type: TOGGLE_TODO , index}
};

export const SET_VISIBILITY_FILTER = (filter) => {
    return { type: SET_VISIBILITY_FILTER , filter}
};

//現在讓我們來定義一些 reducer 以指定當你 dispatch 這些 action 時，state 要如何更新！