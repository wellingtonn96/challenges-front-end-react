import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>React Timer</h1>
      </div>
      <div className="calc">
        <div>
          <label>h</label>
          <label>m</label>
          <label>s</label>
        </div>
        <div>
          <input type="number" length="2"/>
          <input type="number" length="2"/>
          <input type="number" length="2"/>
        </div>
        <div className="keypad">
          <div className="keypad-row">
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div>
          <div className="keypad-row">
            <button>4</button>
            <button>5</button>
            <button>6</button>
          </div>
          <div className="keypad-row">
            <button>7</button>
            <button>8</button>
            <button>9</button>
          </div>
          <div className="keypad-row">
            <button>x</button>
            <button>0</button>
            <button>-</button>
          </div>
        </div>
        <div>
          <button>START</button>
        </div>
      </div>
    </div>
  );
}

export default App;
