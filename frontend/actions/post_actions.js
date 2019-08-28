import * as PostAPIUtil from '../util/post_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePosts = payload => {
  const comments = {};
    Object.keys(payload.posts).map( key => {
      let postComments = payload.posts[key].comment;
      if ( postComments.length !== 0) {
        let commentId = postComments.map( e => e.id);
        commentId.forEach((id, idx) => {
        comments[id] = postComments[idx];
      });
    }
  });
  return {
    type: RECEIVE_POSTS,
    posts: payload.posts,
    comments: comments
  };
};

const receivePost = payload => {
  return {
    type: RECEIVE_POST,
    post: payload.post,
    author: payload.author,
    comments: payload.comments
  };
};

const removePost = payload => ({
  type: REMOVE_POST,
  post: payload.post,
  author: payload.author
});


export const fetchPosts = () => dispatch => {
  return PostAPIUtil.fetchPosts().then(
    payload => dispatch(receivePosts(payload)),
    errors => dispatch(receiveErrors(errors, 'posts'))
  );
};

export const fetchPost = postId => dispatch => {
  return PostAPIUtil.fetchPost(postId).then(
    payload => dispatch(receivePost(payload)),
    errors => dispatch(receiveErrors(errors, 'posts'))
  );
};

export const createPost = post => dispatch => {
  return PostAPIUtil.createPost(post).then(
    payload => dispatch(receivePost(payload)),
    errors => dispatch(receiveErrors(errors, 'posts'))
  );
};

export const updatePost = post => dispatch => {
  return PostAPIUtil.updatePost(post).then(
    payload => dispatch(receivePost(payload)),
    errors => dispatch(receiveErrors(errors, 'posts'))
  );
};

export const deletePost = postId => dispatch => {
  return PostAPIUtil.deletePost(postId).then(
    payload => dispatch(removePost(payload)),
    errors => dispatch(receiveErrors(errors, 'posts'))
  );
};
