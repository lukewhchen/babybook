import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import CommentForm from "../form/comment_form";

function PostItem(props) {
  const timestamp = new Intl.DateTimeFormat('en-US', {
      month: 'long',
      day: '2-digit',
      hour: 'numeric',
      minute: 'numeric',
    }).format(new Date(props.post.created_at));
  const author = props.post.author_name;
  const authorURL = `/users/${props.post.author_id}`;
  const postContent = props.post.body;
  const postImage = props.post.image_url;
  return (
    <div className="single-post">
      <div className="post-header">
        <div className="avatar">
          <Link to={authorURL}><i className="fa fa-user-circle" aria-hidden="true"/></Link>
        </div>
        <div className="post-info">
          <ul><Link to={authorURL}>{author}</Link></ul>
          <ul>{timestamp}</ul>
        </div>
      </div>
      <div className="post-content">
        <ul>{postContent}</ul>
        <img src={postImage}/>
      </div>
      <CommentForm post={props.post}/>
    </div>
  );
}

export default withRouter((PostItem));
