import { combineReducers } from 'redux';

import  { alert } from './alertReducer';
import {authentication } from './authenticationReducer';
import { registration } from './registrationReducer';
import { users } from './usersReducer'

 
const rootReducer = combineReducers({
    alert,
    authentication,
    registration,
    users
});

export default rootReducer;