import merge from 'lodash/merge';
import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST} from '../actions/post_actions';


const postsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return merge({}, state, { [action.post.id]: action.post });
    case REMOVE_POST:
      const newState = merge({}, state);
      delete newState[action.post.id];
      return newState;
    default:
      return state;
  }
};

export default postsReducer;
