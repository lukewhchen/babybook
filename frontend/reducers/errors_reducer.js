// import { combineReducers } from 'redux';
// import sessionErrorsReducer from './session_errors_reducer';

// const errorsReducer = combineReducers({
//   session: sessionErrorsReducer
// });

// export default errorsReducer;



import merge from 'lodash/merge';
import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER
} from '../actions/session_actions';

const defaultState = {
  login: [],
  logout: [],
  signup: [],
  posts: [],
  users: [],
};

const errorsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
    const errors = action.errors.responseJSON;
      return merge({}, state, { [action.errorType]: errors });

    case RECEIVE_CURRENT_USER:
      return state;

    default:
      return state;
  }
};

export default errorsReducer;
