import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './style.sass';

import { TicTacToe, Home, Header, Footer } from 'screens';

ReactDOM.render(
  <div id="main">
    <Header/>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/tictactoe" component={TicTacToe}/>
        <Route render={() => <div>Not Found</div>}/>
      </Switch>
    </BrowserRouter>
    <Footer/>
  </div>,
  document.getElementById('index')
);
