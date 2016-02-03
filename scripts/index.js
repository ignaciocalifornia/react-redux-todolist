import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider, connect} from 'react-redux';

import AddTodoComponent from './components/AddTodo';
import FooterComponent from './components/Footer';
import VisibleTodoListComponent from './components/VisibleTodoList';

import {todosReducer, visibilityFilterReducer} from './reducers';

const todoApp = combineReducers({todosReducer, visibilityFilterReducer});



const TodoAppComponent = () => (
  <div>
    <AddTodoComponent />
    <VisibleTodoListComponent />
    <FooterComponent />
  </div>
);

ReactDOM.render(
  <Provider store={createStore(todoApp)}>
    <TodoAppComponent />
  </Provider>
  ,
  document.getElementById('root')
);





///////////////////////// OLD



//// CONSOLE
// store.subscribe(() => {
//   console.log(store.getState())
// });

// store.dispatch({
//   type: 'ADD_TODO',
//   id: 0,
//   text: 'complete todo'
// });
// store.dispatch({
//   type: 'ADD_TODO',
//   id: 1,
//   text: 'buy vegetables'
// });


/////
// const deepFreezeAndExpect = (stateBefore, stateAfter, action) => {
//   deepFreeze(stateBefore);
//   deepFreeze(action);

//   expect(todosReducer(stateBefore, action)).toEqual(stateAfter);
// };

// const testAddTodo = () => {
//   const stateBefore = [];
//   const stateAfter = [{
//     id: 0,
//     text: 'Learn Redux',
//     completed: false
//   }];
//   const action = {
//     type: 'ADD_TODO',
//     id: 0,
//     text: 'Learn Redux'
//   };

//   deepFreezeAndExpect(stateBefore, stateAfter, action);
// };

// const testToggleTodo = () => {
//   const stateBefore = [{
//     id: 0,
//     text: 'Learn Redux',
//     completed: false
//   },{
//     id: 1,
//     text: 'Shop',
//     completed: false
//   }];

//   const stateAfter = [
//     {
//     id: 0,
//     text: 'Learn Redux',
//     completed: false
//   },{
//     id: 1,
//     text: 'Shop',
//     completed: true
//   }];

//   const action = {
//     type: 'TOGGLE_TODO',
//     id: 1
//   };

//   deepFreezeAndExpect(stateBefore, stateAfter, action);
// };

// testAddTodo();
// testToggleTodo();

// console.log("All test passed");
