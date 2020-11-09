import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LoginForm from '../js/components/login/login';
import RegistrationForm from '../js/components/registration/registration'

const AppRouter = () => (
  <Router>
    <Switch>
      {/* <Route path="/">
        <LoginForm />
      </Route> */}
       {/* <Route path="/" component={props => <LoginForm {...props} />} /> */}
        <Route component={LoginForm} path="/" exact={true} />
        <Route component={RegistrationForm} path="/registration" />
    </Switch>
  </Router>
);

export default AppRouter;
