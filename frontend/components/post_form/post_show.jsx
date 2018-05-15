import React from 'react';
// import { Link } from 'react-router-dom';
// import postDetail from './post_detail';
// import { ProtectedRoute } from '../../util/route_util';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";


function PostShow(props) {
  return (
    <li>
      {props.post.body}
      <img src={props.post.image_url}/>
      posted by:
      <Link to={`/users/${props.author.id}`}>{props.author.fullName}</Link>
      <br/>
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

export default withRouter(connect(mapStateToProps)(PostShow));
