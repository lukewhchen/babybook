import React from 'react';
import { connect } from 'react-redux';
import PostItem from './post_item';
import { fetchPosts, fetchPost } from '../../actions/post_actions';
import { logout } from '../../actions/session_actions';
import PostForm from './post_form';

class PostContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const reversePosts = this.props.posts.reverse();
    const posts = reversePosts.map(post => {
      return <PostItem key={post.id} post={post} />;
    });
    return (
        <div className="HolyGrail">

          <header>
            <div id="mp-header">b</div>
            <div className="current-user">Hi {this.props.currentUser.fullName}</div>
            <button className="logout-button" onClick={this.props.logout}>LOGOUT</button>
          </header>

          <div className="HolyGrail-body">
            <main className="HolyGrail-content">
              <PostForm />
              <ul>{posts}</ul>
            </main>

            <nav className="HolyGrail-nav">Left Side</nav>
            <aside className="HolyGrail-ads">Right Side</aside>
          </div>

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
)(PostContainer);
