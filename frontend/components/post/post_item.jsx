import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";


function PostItem(props) {
  const author = props.post.author_name;
  const authorURL = `/users/${props.post.author_id}`;
  const postContent = props.post.body;
  const postImage = props.post.image_url;
  return (
    <li className="single-post">
      <Link className="user" to={authorURL}><i className="fa fa-user-circle" aria-hidden="true"/>{author}</Link>
      <ul>{postContent}</ul>
        <img src={postImage}/>
      <br/>
      <label className="like-comment-share">
        <i className="fa fa-thumbs-o-up" aria-hidden="true">Like</i>
        <i className="fa fa-commenting-o" aria-hidden="true">Comment</i>
        <i className="fa fa-share" aria-hidden="true">Share</i>
      </label>
    </li>
  );
}

export default withRouter((PostItem));
