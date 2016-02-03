import React from 'react';
import TodoListComponent from './TodoList';
import {toggleTodoAction} from '../../action-creators';
import {connect} from 'react-redux';

// returns visible todos according to a filter
const getVisibleTodos = (todosReducer, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todosReducer;
    case 'SHOW_COMPLETED':
      return todosReducer.filter(s => s.completed);
    case 'SHOW_ACTIVE':
      return todosReducer.filter(s => !s.completed);
  }
};

const mapStateToPropsTodos = (state) => ({
  todos: getVisibleTodos(state.todosReducer, state.visibilityFilterReducer)
});
const mapDispatchToPropsTodos = (dispatch) => ({
  onTodoClick: (id) => {
    dispatch(toggleTodoAction(id));
  }
});
// pass the presentation layer as second function argument
const VisibleTodoListComponent = connect(
  mapStateToPropsTodos,
  mapDispatchToPropsTodos
)(TodoListComponent);

export default VisibleTodoListComponent;



//// NO LONGER NECESSARY THANKS TO THE CONNECT FUNCTION
//// the store (thus the state and dispatch) are received from the context
//// the contextTypes are written in the connect function as well
//class VisibleTodoListComponent extends Component {
//  componentDidMount() {
//    const {store} = this.context;
//    this.unsubscribe = store.subscribe(() => this.forceUpdate());
//  }
//
//  componentWillUmount() {
//    this.unsubscribe();
//  }
//
//  render() {
//    const {store} = this.context;
//    const {todos, onTodoClick} = this.props;
//    const state = store.getState();
//
//    return (<TodoListComponent
//      todos={getVisibleTodos(state.todosReducer, state.visibilityFilterReducer)}
//      onTodoClick={(id) => {
//        dispatch({
//          type: 'TOGGLE_TODO',
//          id
//        });
//      }}
//      />);
//  }
//}
//// mandatory context to receive:
//VisibleTodoListComponent.contextTypes = {
//  store: React.PropTypes.object
//};
