import * as PostAPIUtil from '../util/post_api_util';
import { receiveErrors } from './session_actions';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

const removePost = post => ({
  type: REMOVE_POST,
  post
});


export const fetchPosts = userId => dispatch => {
  return PostAPIUtil.fetchPosts(userId).then(
    posts => dispatch(receivePosts(posts)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const fetchPost = postId => dispatch => {
  return PostAPIUtil.fetchPost(postId).then(
    post => dispatch(receivePost(post)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const createPost = post => dispatch => {
  return PostAPIUtil.createPost(post).then(
    post => dispatch(receivePost(post)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const updatePost = post => dispatch => {
  return PostAPIUtil.updatePost(post).then(
    post => dispatch(receivePost(post)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};

export const deletePost = postId => dispatch => {
  return PostAPIUtil.deletePost(postId).then(
    post => dispatch(removePost(post)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  );
};
