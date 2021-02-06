import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import About from './components/about';
import Contact from './components/contact';
import Header from './components/header'
import Portfolio from './components/portfolio';
import Skills from './components/skills';
import Welecome from './components/welecome';
import "./index.css"


export default function App() {

  const isAuthenticated = false

  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Welecome} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/skills" component={Skills} />
          <Route exact path="/test/:id" component={Header} />
          {
            isAuthenticated ?
              <>
                <Route path="/profile" component={Header} />
                
              </> : <Redirect to="/" />
          }
          <Route render={() => <h1>404: page not found</h1>} />





        </Switch>
      </Fragment>
    </Router>
  );
}