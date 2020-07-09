import React from 'react';

const Display = ({ onClick }) =>
  <div className="display">
    <button onClick={onClick}><i className="fa fa-calendar"></i></button>
  </div>

export default Display;