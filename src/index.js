import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { Grid, Row, Col } from 'react-bootstrap';

import { TicTacToe, Home, Header, Footer } from 'screens';
import { AppNavbar } from 'components';

import './style.sass';

const appHistory = createBrowserHistory();

const LINKS = [{
  content: 'home',
  src: '/'
}, {
  content: 'tic tac toe',
  src: '/tictactoe'
}];

ReactDOM.render(
  <Grid id="main" fluid>
    <Row componentClass="section">
      <Col className="full" sm={12}>
        <Header/>
      </Col>
    </Row>
    <Row componentClass="section">
      <Col className="full" xs={12}>
        <AppNavbar links={LINKS}/>
      </Col>
    </Row>
    <Row componentClass="section">
      <Col className="full" xs={12}>
        <Router history={appHistory}>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/tictactoe" component={TicTacToe}/>
            <Route render={() => <div>Not Found</div>}/>
          </Switch>
        </Router>
      </Col>
    </Row>
    <Row componentClass="section">
      <Col className="full" xs={12}>
        <Footer/>
      </Col>
    </Row>
  </Grid>,
  document.getElementById('index')
);
