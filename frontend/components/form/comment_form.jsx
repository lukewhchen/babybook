import React from "react";
import { connect } from "react-redux";
import CommentItem from "../feed/comment_item";
import { createComment } from "../../actions/comments_actions";
import { fetchPost } from "../../actions/post_actions";


class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: ""
    };
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
  render() {
    // const author = this.props.commenter;
    const allComments = this.props.post.comment;
    const comment = allComments.map( com => {
      debugger;
      return <CommentItem key={com.id} body={com.body} authorId={com.author_id}/>;
    });
    return (
      <div className="post-comment" onSubmit={this.handleSubmit}>
          <ul>{comment}</ul>
          <form className="comment-form">
            <label>
              <i className="fa fa-user-circle cc" aria-hidden="true"/>
            </label>
            <input type="text" name="name" placeholder="Write a comment..."
              onChange={this.handleChange} value={this.state.body}/>
            <p>Press Enter to post.</p>
          </form>
      </div>
    );
  }
}

// const mapStateToProps = (state, ownProps) => {
//   debugger;
//   return {
//     commenter: state.entities.users[ownProps.post.comment.author_id]
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    createComment: comment => dispatch(createComment(comment)),
    fetchPost: postId => dispatch(fetchPost(postId))
  };
};


export default connect(null, mapDispatchToProps)(CommentForm);
