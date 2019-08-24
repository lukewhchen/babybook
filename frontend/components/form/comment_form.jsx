import React from "react";
import CommentItem from "../feed/comment_item";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const author = this.props.post.author;
    const allComments = this.props.post.comment;
    const comment = allComments.map( com => {
      return <CommentItem key={com.id} body={com.body} author="userName"/>;
    });
    return (
      <div className="post-comment">
          <ul>{comment}</ul>
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
