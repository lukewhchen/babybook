import React from "react";
import { connect } from "react-redux";
import CommentItem from "../feed/comment_item";
import { createComment } from "../../actions/comments_actions";
import { fetchPost } from "../../actions/post_actions";
import { fetchComments } from "../../actions/comments_actions";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ body: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const comment = {"body": this.state.body, "post_id": this.props.post.id};
    this.props.createComment(comment).then(() => {
        this.props.fetchPost(this.props.post.id);
    });
    return (
      this.setState({ body: "" })
    );
  }
//  如果 createCommment 沒有繼續用 promise call fetchPost 的話，input 會清空但是
//  新的 comment 不會 show 出來
//  應該可以不用接 fetchPost, 直接用 postId receiveComment re-render
  render() {
    const allComments = this.props.post.comment;
    const comment = allComments.map( com => {
      return <CommentItem key={com.id}
                          body={com.body}
                          author={com.author_name}
                        />;
    });
    return (
      <div className="post-comment" onSubmit={this.handleSubmit}>
        <label className="like-comment-share">
          <a className="fa fa-thumbs-o-up" aria-hidden="true">Like</a>
          <a className="fa fa-commenting-o" aria-hidden="true">Comment</a>
          <a className="fa fa-share" aria-hidden="true">Share</a>
        </label>
        <ul>{comment}</ul>
        <form className="comment-form">
          <i className="fa fa-user-circle cc" aria-hidden="true"/>
          <input type="text" name="name" placeholder="Write a comment..."
            onChange={this.handleChange} value={this.state.body}/>
          <p>Press Enter to post.</p>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment)),
    fetchPost: postId => dispatch(fetchPost(postId)),
    fetchComments: postId => dispatch(fetchComments(postId))
  };
};

export default connect(null, mapDispatchToProps)(CommentForm);
