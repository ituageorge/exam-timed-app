import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import { userActions } from '../../nonFeature/_actions';


// const { count, user } = useSelector(state => ({
//   count: state.counter.count,
//   user: state.user,
// }), shallowEqual);

const LoginForm = () => {
  const dispatch = useDispatch();
  const num = useSelector(state => state.num)

  const [name, setName ] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  //reset login status
  // logout();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    {username && password &&
      login(username, password)
    }
    if( username && password){
      login(username, password)
    }
  }


  return (
    <section className="form">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-5">
            <img src="" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-7 px-5 pt-5">
            <h1 className="font-weight-bold">Exam Time Application</h1>
            <h4>Sign into your account</h4>
            <form name='form' onSubmit={handleSubmit}>
              <div className={"form-group col-lg-7" + (submitted && !username ? ' has-error' : '')}>
              <label htmlFor="username">Username</label>
                  <input
                    type="text"
                    placeholder="Username"
                    className="form-control my-3 p-4"
                    name="username"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                  {submitted && !username &&
                  <div className="help-block">Username is required</div>}
                
              </div>
              <div className={"form-group col-lg-7" + (submitted && !username ? ' has-error' : '')}>
              <label htmlFor="username">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control my-3 p-4"
                    name="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                  />
                  {
                  submitted && !password &&
                  <div className="help-block">Password is required</div>
                  }
                
              </div>
              <div className="form-row col-lg-7">
                
                  <button type="button" className="btn1 btn1 mt-3 mb-5">
                    Login
                  </button>
                  {/* {loggingIn && <img src=""/>} */}
                
              </div>
              <a href="#">Forgot password</a>
              <p>
                Don't have an account?
                 
                <Link to="/registration">Register here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
