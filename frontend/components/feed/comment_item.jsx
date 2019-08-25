import React from "react";

function commentItem(props) {
  return (
    <div className="single-comment">
      <i className="fa fa-user-circle cc" aria-hidden="true"/>
      <div className="comment-body">
        <label>{props.author}</label>
        <p>{props.body}</p>
      </div>
    </div>
  );
}

export default commentItem;
