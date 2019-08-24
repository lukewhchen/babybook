import merge from 'lodash/merge';
import { RECEIVE_POSTS, RECEIVE_POST, REMOVE_POST} from '../actions/post_actions';
import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../actions/comments_actions';

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
    case RECEIVE_COMMENT:{
      let post = Object.assign({}, state[action.comment.post_id]);
      post.comment_ids = post.comment_ids.slice();
      post.comment_ids.push(action.comment.id);
      return merge({}, state, { [post.id]: post});
    }
    case REMOVE_COMMENT:{
      let post = Object.assign({}, state[action.comment.post_id]);
      post.comment_ids = post.comment_ids.slice();
      post.comment_ids.splice(post.comment_ids.indexOf(action.comment.id), 1);
      return merge({}, state, { [post.id]: post});
    }
    default:
      return state;
  }
};

export default postsReducer;
