// replace with new_post_form
import PostForm from './post_form';
import { connect } from 'react-redux';
import { createPost } from '../actions/post_actions';

const mapStateToProps = state => {
  return {
    post: { body: "", post_image_url: "" }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    submit: post => dispatch(createPost(post))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);

// replace with new_post_form
