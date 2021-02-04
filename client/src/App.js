import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import Header from './components/header'
import "./index.css"


export default function App() {

  const isAuthenticated = false

  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/test" component={Header} />
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