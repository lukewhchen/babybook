import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";


function PostItem(props) {
  return (
    <li className="single-post">
      <Link className="user" to={`/users/${props.author.id}`}>{props.author.fullName}</Link>
      <br/>
      {props.post.body}
      <br/>
        <img src={props.post.image_url}/>
      <br/>
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
