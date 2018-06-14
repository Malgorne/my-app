import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import createBrowserHistory from 'history/createBrowserHistory';

import './style.sass';

import { TicTacToe, Home, Header, Footer } from 'screens';

const appHistory = createBrowserHistory();

ReactDOM.render(
  <Grid id="main" fluid>
    <Row componentClass="section">
      <Col sm={12}>
        <Header/>
      </Col>
    </Row>
    <Row componentClass="section">
      <Col sm={12}>
        <BrowserRouter histrory={appHistory}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/tictactoe" component={TicTacToe}/>
            <Route render={() => <div>Not Found</div>}/>
          </Switch>
        </BrowserRouter>
      </Col>
    </Row>
    <Row componentClass="section">
      <Col sm={12}>
        <Footer/>
      </Col>
    </Row>
  </Grid>,
  document.getElementById('index')
);
