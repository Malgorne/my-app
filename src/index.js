import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './style.sass';

import { Home, Header, Footer } from 'screens';

ReactDOM.render(
  <div id="main">
    <Header />
    <BrowserRouter>
      <Home />
    </BrowserRouter>
    <Footer />
  </div>,
  document.getElementById('index')
);
