// replace with new_post_form
import React from 'react';
import PostForm from './post_form';
import { connect } from 'react-redux';
import { fetchPost, updatePost } from '../actions/post_actions';
// import { selectPost } from '../selectors';

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.entities.posts[ownProps.postId]
  };
  // const defaultPost = { body: '', post_image_url: '' };
  // const post = selectPost(ownProps.match.params.postId) || defaultPost;
  // return { post };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPost: id => dispatch(fetchPost(id)),
    submit: post => dispatch(updatePost(post)),
  };
};

class EditPostForm extends React.Component {

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  render() {
    const { post, submit } = this.props;
    return (
      <PostForm post={post} submit={submit} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);
// replace with new_post_form
