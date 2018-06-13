import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './style.sass';

import { TicTacToe, Home, Header, Footer } from 'screens';

ReactDOM.render(
  <div id="main">
    <Header />
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/tictactoe" component={TicTacToe}/>
      </Switch>
    </BrowserRouter>
    <Footer />
  </div>,
  document.getElementById('index')
);
// <Route exact path='/' component={Home}/>
//   {/* both /roster and /roster/:number begin with /roster */}
//   <Route path='/roster' component={Roster}/>
//   <Route path='/schedule' component={Schedule}/>
