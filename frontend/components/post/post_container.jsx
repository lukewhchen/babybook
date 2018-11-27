import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import PostItem from './post_item';
import { fetchPosts, fetchPost } from '../../actions/post_actions';
import { fetchUsers } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import PostForm from './post_form';
import LeftSidebar from './left_sidebar';
import RightSidebar from './right_sidebar';

class PostContainer extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchPosts();
  }

  render() {
    const currentUser = this.props.currentUser;
    const reversePosts = this.props.posts.reverse();
    const posts = reversePosts.map(post => {
      return <PostItem key={post.id} post={post} />;
    });

    return (
        <div>
          <header>
            <Link to="/"><p className="mp-header">b</p></Link>
            <input className="search-bar" type="text" placeholder=" Search..." />
            <p className="current-user">
              <Link className="user-link" to={`/users/${this.props.currentUser.id}`}>
                <i className="fa fa-user-circle" aria-hidden="true"/>{this.props.currentUser.fullName}</Link>
            </p>
            <button className="logout-button" onClick={this.props.logout}>Log Out</button>
          </header>
          <div className="MainPage-body">
            <main className="MainPage-content">
              <PostForm />
              <ul>{posts}</ul>
            </main>
            <nav className="MainPage-nav"><LeftSidebar currentUser={currentUser}/></nav>
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
  fetchUsers: () => dispatch(fetchUsers()),
  fetchPosts: () => dispatch(fetchPosts()),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
