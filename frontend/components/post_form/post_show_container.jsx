import { connect } from 'react-redux';

import { fetchPosts, fetchPost } from '../../actions/post_actions';
import postShow from './post_show';

const mapStateToProps = (state, ownProps) => {
  return {
    posts: state.entities.posts,
    post: state.entities.posts[ownProps.match.params.postId]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: (userId) => dispatch(fetchPosts(userId)),
  fetchPost: (postId) => dispatch(fetchPost(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(postShow);
