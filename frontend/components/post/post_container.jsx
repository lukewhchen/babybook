import React from 'react';
import { connect } from 'react-redux';
import PostItem from './post_item';
import { fetchPosts, fetchPost } from '../../actions/post_actions';
import { logout } from '../../actions/session_actions';
import PostForm from './post_form';
import LeftSidebar from './left_sidebar';
import RightSidebar from './right_sidebar';

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
        <div>
          <header>
            <p className="mp-header">b</p>
            <input className="search-bar" type="text" placeholder="Search" />
            <p className="current-user">
              <i className="fa fa-user-circle" aria-hidden="true"/>&nbsp;&nbsp;{this.props.currentUser.fullName}
            </p>
            <button className="logout-button" onClick={this.props.logout}>LOGOUT</button>
          </header>
          <div className="MainPage-body">
            <main className="MainPage-content">
              <PostForm />
              <ul>{posts}</ul>
            </main>
            <nav className="MainPage-nav"><LeftSidebar/></nav>
            <aside className="MainPage-ads"><RightSidebar/></aside>
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
