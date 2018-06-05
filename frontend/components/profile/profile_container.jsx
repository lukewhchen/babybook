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
    this.props.fetchUser(this.props.match.params.userId);
    // this.props.fetchPosts(this.props.user.id);
    // this.props.fetchUsers();
  }

  render() {
    // const posts = this.props.posts.map(post => {
    //   return <PostItem key={post.id} post={post} />;
    //   });
    const ProfilePicture = ({url}) => (
      <div id='profile-pic'>
        <img src={url}></img>
      </div>
    );
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

        <div className="profile">
          <ProfilePicture url={this.props.user.profile_photo_url}/>
          <div className="profile-body">
            <li className="profile-post">
              <br/>
              <p>Current user is: {this.props.currentUser.fullName}</p>
              <p>{console.log(this.props)}</p>
              <p>This is {this.props.user.fullName} profile</p>
              <label className="like-comment-share">
                <i className="fa fa-thumbs-o-up" aria-hidden="true">Like</i>
                <i className="fa fa-commenting-o" aria-hidden="true">Comment</i>
                <i className="fa fa-share" aria-hidden="true">Share</i>
              </label>
            </li>
            <div className="pp-body">
              <main className="pp-content">
                <PostForm />
              </main>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
// tp6 console 第二次才抓到user資料

const mapStateToProps = (state, ownProps) => {
  return {
    // posts: Object.values(state.entities.posts),
    user: state.entities.users[ownProps.match.params.userId] || {"last_name": "lest", posts:[]},
    currentUser: state.entities.users[state.session.id],
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
