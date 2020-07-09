import React from 'react';

const InputTimer = ({ onChange, value}) => 
  <input 
    type="text"
    onChange={onChange}
    maxLength={6}
    value={value}
    autoFocus0
    />

export default InputTimer;