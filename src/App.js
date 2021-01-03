/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import logo from './logo.svg';
import './styles/App.css';
import { HashRouter, Switch, Route, Link, Redirect } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Quiz from './components/Quiz'
import React, { Component, useState } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
 // <Button as={Link} to="/home"> Home </Button>
 // <Button as={Link} to="/quiz"> Quiz </Button>
function App() {
  const [showFixedMenu, toggleFixedMenu] = useState(true)
  return (
    <div className="App">
      <HashRouter basename="/">
        <Switch>
          <Route exact path={"/"}> <Redirect to="/home" /> </Route>
          <Route exact path={"/home"} component={Home}></Route>
          <Route exact path={"/about"} component={About}></Route>
          <Route path={"/quiz"} component={Quiz}/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
