import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USERS, RECEIVE_USER } from '../actions/user_actions';
import { RECEIVE_POSTS, RECEIVE_POST} from '../actions/post_actions';
import { RECEIVE_SEARCH_RESULTS } from '../actions/search_actions';


const usersReducer =  (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    // case RECEIVE_POSTS:
    //   return merge({}, state, action.authors);
    // case RECEIVE_POST:
    //   return merge({}, state, {[action.author.id]: action.author});
    case RECEIVE_SEARCH_RESULTS:
      return merge({}, state, action.users);
      // Object.values(action.users).forEach(id => {
      //   delete newState[id];
      //   newState[id] = action.users[id];
      // });
      // return newState;
    default:
      return state;
  }
};

export default usersReducer;
