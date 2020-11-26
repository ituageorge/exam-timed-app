import { combineReducers } from 'redux';

import   { alert }  from './alertReducer';
import { authentication }  from './authenticationReducer';
import  { registration }  from './registrationReducer';

 
const rootReducer = combineReducers({
    alert,
    authentication,
    registration
});

export default rootReducer;