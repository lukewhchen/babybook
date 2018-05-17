import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";


function PostItem(props) {
  return (
    <li className="single-post">
      <Link className="user" to={`/users/${props.author.id}`}><i className="fa fa-user-circle" aria-hidden="true"/>&nbsp;&nbsp;{props.author.fullName}</Link>
      <br/>
      {props.post.body}
      <br/>
        <img src={props.post.image_url}/>
      <br/>
      <label className="like-comment-share">
        <i className="fa fa-thumbs-o-up" aria-hidden="true">Like</i>
        <i className="fa fa-commenting-o" aria-hidden="true">Comment</i>
        <i className="fa fa-share" aria-hidden="true">Share</i>
      </label>
    </li>
  );
}


const mapStateToProps = (state, ownProps) => {
  const authorId = ownProps.post.author_id;
  const author = state.entities.users[authorId];
  return {
    author: author
  };
};

export default withRouter(connect(mapStateToProps)(PostItem));
