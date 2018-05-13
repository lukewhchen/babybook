import React from 'react';
import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPosts, fetchPost } from '../../actions/post_actions';
import { logout } from '../../actions/session_actions';

class PostShowContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const posts = this.props.posts.map(post => {
      return <PostShow key={post.id} post={post} />;
    });
    return (
      <div>
        <span>Hi {this.props.currentUser.fullName}</span>
        <br/>
        <button onClick={this.props.logout}>LOGOUT!</button>
        <article>
          <h3>Here is your Posts...</h3>
          <ul>{posts}</ul>
        </article>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts),
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShowContainer);
