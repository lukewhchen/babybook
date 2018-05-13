import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_POSTS, RECEIVE_POST} from '../actions/post_actions';


const usersReducer =  (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case RECEIVE_POSTS:
      return merge({}, state, action.authors);
    case RECEIVE_POST:
      return merge({}, state, {[action.author.id]: action.author});
    default:
      return state;
  }
};

export default usersReducer;
