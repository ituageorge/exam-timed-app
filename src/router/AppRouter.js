import React, { useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import { history } from '../js/nonFeature/_helpers/history';
import { PrivateRoute }  from '../js/nonFeature/_components/PrivateRoute';
import { HomePage } from '../js/components/home'
import { LoginForm } from '../js/components/login'
import { RegistrationForm } from '../js/components/registration'

import { alertActions } from '../js/nonFeature/_actions';



function App() {
    const alert = useSelector(state => state.alert);
    const dispatch = useDispatch();

    useEffect(() => {
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        });
    }, [history]);

 
      return (
        //   <div className="jumbotron">
              <div className="">
              {/* <div className="container"> */}
            
                  {/* <h1>Exam Timed App</h1> */}
                  
                      {alert.message &&
                          <div className={`alert ${alert.type}`}>{alert.message}</div>
                      }
                      <Router history={history}>
                      
                          <Switch>
                              <PrivateRoute exact path="/" component={HomePage} />
                              <Route path="/login" component={LoginForm} />
                              <Route path="/register" component={RegistrationForm} />
                              <Redirect from="*" to="/login" />
                              
                          </Switch>
                      </Router>
                  
              </div>
        //   </div>
      );
  }

  

export default App;
