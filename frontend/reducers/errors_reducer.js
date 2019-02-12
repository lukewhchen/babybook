import merge from 'lodash/merge';
import {
  RECEIVE_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS
} from '../actions/session_actions';

const defaultState = {
  login: [],
  logout: [],
  signup: [],
  posts: [],
  users: [],
  comments: []
};

const errorsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ERRORS:
      const errors = action.errors.responseJSON;
      return merge({}, state, { [action.errorType]: errors });

    case RECEIVE_CURRENT_USER:
      return state;

    case CLEAR_ERRORS:
      return defaultState;

    default:
      return state;
  }
};

export default errorsReducer;
