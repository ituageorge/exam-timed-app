import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'

import userAction from '../../nonFeature/_actions'


const RegistrationForm = () => {
 const dispatch = useDispatch();
 
  const[user, setUser] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if(user.firstName && user.lastName && user.username && user.password){
      register(user)
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
            <h1 className="font-weight-bold">Exam Timed App</h1>
            <h4>Register your account</h4>
            <form name="form" onSubmit={handleSubmit}>
              <div className={"form-group col-lg-7" + (submitted && !user.firstName ? ' has-error' : '')}>
      
                <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    className="form-control my-3 p-4"
                    name="firstName"
                    value={user.firstName}
                    onChange={e => setUser(e.target.value)}
                    placeholder="First Name"
                    />
                    {submitted && !user.firstName && 
                    <div className="help-block">First Name is required</div>
                  }   
                
              </div>
              <div className={"form-group col-lg-7" + (submitted && !user.lastName ? ' has-error' : '')}>
      <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          className="form-control my-3 p-4"
          name="lastName"
          value={user.lastName}
          onChange={e => setUser(e.target.value)}
          placeholder="Last Name"
          />
          {submitted && !user.lastName && 
          <div className="help-block">Last Name is required</div>
        }   
      
    </div>
    <div className={"form-group col-lg-7" + (submitted && !user.username ? ' has-error' : '')}>
      
      <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control my-3 p-4"
          name="username"
          value={user.username}
          onChange={e => setUsername(e.target.value)}
          placeholder="Username"
          />
          {submitted && !user.username && 
          <div className="help-block">Username is required</div>
        }   
      
    </div>
    <div className={"form-group col-lg-7" + (submitted && !user.password ? ' has-error' : '')}>
      
      <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control my-3 p-4"
          name="password"
          value={user.password}
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          />
          {submitted && !user.password && 
          <div className="help-block">Password is required</div>
        }   
      
    </div>
              <div className="form-row col-lg-7">             
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    id="file"
                    className="form-control my-3 p-4"
                  />               
              </div>

              <div className="form-row">
                <div className="col-lg-7">
                  <button type="button" className="btn1 btn1 mt-3 mb-5">
                    Register
                  </button>
                </div>
              </div>
              <p>
              Already a member?
                <Link to="/login">Login here</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


export default RegistrationForm;
