import React from 'react';
import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPosts, fetchPost } from '../../actions/post_actions';
import { logout } from '../../actions/session_actions';
import NewPostForm from './new_post_form';
import MainPageHeader from '../welcome/main_page_header';

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
        <MainPageHeader/>
        <div className="current-user">Hi {this.props.currentUser.fullName}</div>
        <br/>
        <button className='logout-button' onClick={this.props.logout}>LOGOUT</button>
          <div className="post-form">
            <NewPostForm />
          </div>
        <article>
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
