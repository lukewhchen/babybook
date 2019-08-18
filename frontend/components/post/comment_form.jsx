import React from "react";

class CommentForm extends React.Component {
  render() {
    return (
      <div className="post-comment">
        <p>Comment Here</p>
          <form className="comment-form">
            <label>
              <i className="fa fa-user-circle cc" aria-hidden="true"/>
              <input type="text" name="name" placeholder="Write a comment..."/>
            </label>
            <p>Press Enter to post.</p>
          </form>
      </div>
    );
  }
}

export default CommentForm;
