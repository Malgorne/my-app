import React from 'react';
import ReactDOM from 'react-dom';
import './style.sass';

import { Home } from 'screens';
console.log('Home', Home);
const Index = () => <Home />;

ReactDOM.render(
  <div id="main">
    <p>MAIN</p>
    <Index />
  </div>,
  document.getElementById('index')
);
