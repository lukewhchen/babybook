import * as PostAPIUtil from '../util/post_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePosts = payload => ({
  type: RECEIVE_POSTS,
  posts: payload.posts,
  comments: payload.comments
});

const receivePost = payload => ({
  type: RECEIVE_POST,
  post: payload.post,
  author: payload.author,
  comments: payload.comments
});

const removePost = payload => ({
  type: REMOVE_POST,
  post: payload.post,
  author: payload.author
});


export const fetchPosts = userId => dispatch => {
  return PostAPIUtil.fetchPosts(userId).then(
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
