import merge from 'lodash/merge';
import { RECEIVE_POSTS, RECEIVE_FEED, RECEIVE_POST } from '../actions/post_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comments_actions';


const commentsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COMMENT: {
      return merge({}, state, {[action.comment.id]: action.comment});
    }
    case REMOVE_COMMENT: {
      const newState = merge({}, state);
      delete newState[action.comment.id];
      return newState;
    }
    default:
      return state;
  }
};

export default commentsReducer;
