import React from 'react';

// returns an anchor element
// if one clicks, triggers a new state with a new filter
const LinkComponent = ({active, children, onClick,}) => {
  if (active) {
    return <span>{children}</span>;
  }
  return (
    <a href="#"
       onClick={(e) => {
         e.preventDefault();
         onClick();
       }}
    >{children}</a>
  );
};

export default LinkComponent;
