import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
// import { Router, Route, Switch, Redirect } from 'react-router-dom';


import { history } from '../js/nonFeature/_helpers/history';
import { alertActions } from '../js/nonFeature/_actions';
import { PrivateRoute }  from '../js/nonFeature/_components/PrivateRoute';
import { HomePage } from '../js/components/home'
import { LoginForm } from '../js/components/login'
import { RegistrationForm } from '../js/components/registration'



class App extends React.Component {
  constructor(props) {
      super(props);

      history.listen((location, action) => {
        //   clear alert on location change
          this.props.clearAlerts();
      });
  }

  render() {
      const { alert } = this.props;
      return (
          <div className="jumbotron">
              <div className="container">
                  <h1>Exam Timed App</h1>
                  <div className="col-sm-8 col-sm-offset-2">
                      {/* {alert.message &&
                          <div className={`alert ${alert.type}`}>{alert.message}</div>
                      } */}
                      <Router history={history}>
                      
                          <Switch>
                              <PrivateRoute exact path="/" component={HomePage} />
                              <Route path="/login" component={LoginForm} />
                              <Route path="/registration" component={RegistrationForm} />
                              <Redirect from="*" to="/" />
                          </Switch>
                      </Router>
                  </div>
              </div>
          </div>
      );
  }
}

// function mapState(state) {
//   const { alert } = state;
//   return { alert };
// }

// const actionCreators = {
//   clearAlerts: alertActions
// };

// const connectedApp = connect(mapState, actionCreators)(App);
// export { connectedApp as App };
export default App;
