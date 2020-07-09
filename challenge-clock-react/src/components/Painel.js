import React from 'react';

const Painel = ({ DateTime, date, dateState }) =>
  <div className="painel">
    <p className="hour">{DateTime.toTimeString(dateState)}</p>
    {date}
  </div>

export default Painel;