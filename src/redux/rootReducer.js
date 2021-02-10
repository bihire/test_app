import { combineReducers } from 'redux';

import loginReducer from './reducer/signin_reducer';

const rootReducer = combineReducers({
    user: loginReducer,
});

export default rootReducer;