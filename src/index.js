import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

import './style.sass';

import { TicTacToe, Home, Header, Footer } from 'screens';

const ownHistory = createBrowserHistory();

ReactDOM.render(
  <div id="main">
    <Header/>
    <BrowserRouter histrory={ownHistory}>
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
