import React from 'react';
import TodoComponent from './Todo';

// Renders a todo list component
const TodoListComponent = ({todos, onTodoClick}) => (
  <ul>
    {todos.map((todo) =>
      <TodoComponent
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
      />
    )}
  </ul>
);

export default TodoListComponent;
