import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { fetchPosts, fetchPost } from '../../actions/post_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import PostForm from '../post/post_form';
import PostItem from '../post/post_item';


class ProfileContainer extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPosts(this.props.match.params.userId);
  }

  render() {
    const reversePosts = this.props.posts.reverse();
    const userPosts = reversePosts.map(post => {
      if (post.author_id === this.props.user.id) {
        return <PostItem key={post.id} post={post} />;
      }
    });

    return (
      <div>
        <header>
          <Link to="/"><p className="mp-header">b</p></Link>
          <input className="search-bar" type="text" placeholder="Search" />
          <p className="current-user">
            <Link className="user-link" to={`/users/${this.props.currentUser.id}`}>
              <i className="fa fa-user-circle" aria-hidden="true"/>{this.props.currentUser.fullName}</Link>
          </p>
          <button className="logout-button" onClick={this.props.logout}>LOGOUT</button>
        </header>

        <div className="cover-imgs">
          <img src={this.props.user.cover_photo_url}/>
          <img id="profile-imgs" src={this.props.user.profile_photo_url}/>
          <h4>{this.props.user.fullName}</h4>
        </div>

          <div className="profile-body">
            <div className="user-info">
              <label className="user-icon">
                <i className="fa fa-globe" aria-hidden="true">&nbsp;&nbsp;Intro</i>
              </label>
              <p>User name: {this.props.user.fullName}</p>
              <p>Email: {this.props.user.email}</p>
              <p>Hometown: {this.props.user.hometown || "null"}</p>
              <p>Workplace: {this.props.user.workplace || "null"}</p>
              <p>School: {this.props.user.school || "null"}</p>
              <p>Gender: {this.props.user.gender || "null"}</p>
            </div>

            <div className="profile-post">
              <PostForm />
              <ul>{userPosts}</ul>
            </div>

        </div>
      </div>
    );
  }
}
// tp6 console 第二次才抓到user資料

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId] || {"last_name": "lest", posts:[]};
  return {
    user,
    currentUser: state.entities.users[state.session.id],
    posts: Object.values(state.entities.posts),
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchUsers: () => dispatch(fetchUsers()),
  fetchPosts: userId => dispatch(fetchPosts(userId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
