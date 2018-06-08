import React from 'react';
import ReactDOM from 'react-dom';
import './style.sass';

import { Home } from 'screens';

ReactDOM.render(
  <div id="main">
    <p>MAIN</p>
    <Home />
  </div>,
  document.getElementById('index')
);
