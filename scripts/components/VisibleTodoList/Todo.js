import React from 'react';

// Renders a todo component
const TodoComponent = ({onClick, text, completed}) => (
  <li onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
  >{text}</li>
);

export default TodoComponent;
