import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

import {userActions} from '../../nonFeature/_actions';
import {QuestionApp} from '../question';

const HomePage = () => {
  const user = useSelector((state) => state.authentication.user);
  const users = useSelector(state => state.users)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.getAll());
}, []);

  return (
    <div className="col-md-6 col-md-offset-3">
      {/* // <div className=""> */}
      <h1>Hi {user.firstName}!</h1>
      <p>You are logged in !</p>
      <img src="" alt="" />

      <QuestionApp />

      <p>
        <Link to="/login">Logout</Link>
      </p>
    </div>
  );
};

export default HomePage;
