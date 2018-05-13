import * as PostAPIUtil from '../util/post_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePosts = payload => ({
  type: RECEIVE_POSTS,
  posts: payload.posts,
  authors: payload.authors
});

const receivePost = payload => ({
  type: RECEIVE_POST,
  post: payload.post,
  author: payload.author
});

const removePost = payload => ({
  type: REMOVE_POST,
  post: payload.post,
  author: payload.author
});


export const fetchPosts = userId => dispatch => {
  return PostAPIUtil.fetchPosts(userId).then(
    payload => dispatch(receivePosts(payload))
  );
};

export const fetchPost = postId => dispatch => {
  return PostAPIUtil.fetchPost(postId).then(
    payload => dispatch(receivePost(payload))
  );
};

export const createPost = post => dispatch => {
  return PostAPIUtil.createPost(post).then(
    payload => dispatch(receivePost(payload))
  );
};

export const updatePost = post => dispatch => {
  return PostAPIUtil.updatePost(post).then(
    payload => dispatch(receivePost(payload))
  );
};

export const deletePost = postId => dispatch => {
  return PostAPIUtil.deletePost(postId).then(
    payload => dispatch(removePost(payload))
  );
};
