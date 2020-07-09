import React from 'react';

const Button = ({className, onClick, children}) =>
  <button
    type="button"
    className={className}
    onClick={onClick}
    >
    {children}
  </button>

export default Button;