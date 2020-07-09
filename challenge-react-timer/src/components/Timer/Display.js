import React from 'react';

const Display = ({ className, children }) =>
  <div>
    <p className={className}>{children}</p>
  </div>

export default Display