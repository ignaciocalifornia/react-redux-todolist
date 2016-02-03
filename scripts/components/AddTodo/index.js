import React from 'react';
import {connect} from 'react-redux';
import {addTodoAction} from '../../action-creators';


let AddTodoComponent = ({dispatch}) => {
  let input;
  return (
    <div>
      <input ref={node => {
        input = node
      }}
      />
      <button onClick={() => {
      dispatch(addTodoAction(input.value));
      input.value = '';
    }}>Add todo
      </button>
    </div>
  )};

// NOT NECESSARY WHEN USING CONNECT
//AddTodoComponent.contextTypes = {
//  store: React.PropTypes.object
//};


AddTodoComponent = connect()(AddTodoComponent);
//AddTodoComponent = connect(
//  null, //state => ({}),
//  null //dispatch => ({dispatch})
//)(AddTodoComponent);

export default AddTodoComponent;

