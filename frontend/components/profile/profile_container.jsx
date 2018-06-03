import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";


function ProfileContainer(props) {
  return (
    <li className="single-post">
      <br/>
      <p>Hellow world</p>
      <label className="like-comment-share">
        <i className="fa fa-thumbs-o-up" aria-hidden="true">Like</i>
        <i className="fa fa-commenting-o" aria-hidden="true">Comment</i>
        <i className="fa fa-share" aria-hidden="true">Share</i>
      </label>
    </li>
  );
}


export default ProfileContainer;
// for testing
