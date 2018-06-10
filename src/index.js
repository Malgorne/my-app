import React from 'react';
import ReactDOM from 'react-dom';
import './style.sass';

import { TicTacToe } from 'screens';

ReactDOM.render(
  <div id="main">
    <TicTacToe />
  </div>,
  document.getElementById('index')
);
