import { connect } from 'react-redux';

import { fetchPosts, fetchPost } from '../../actions/post_actions';
import postShow from './post_show';

const mapStateToProps = (state, ownProps) => {
  return {
    post: state.entities.posts[ownProps.postId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPost: (postId) => dispatch(fetchPost(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(postShow);
