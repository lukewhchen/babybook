import React from 'react';
import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPosts, fetchPost } from '../../actions/post_actions';

class PostShowContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts.map(post => {
      return <PostShow key={post.id} post={post} />;
    });
    return (
      <article>
        <h3>Here is your Posts...</h3>
        <ul>{posts}</ul>
      </article>
    );
  }
}




const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShowContainer);
