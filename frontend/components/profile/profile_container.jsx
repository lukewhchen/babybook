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
    // const ProfilePicture = ({url}) => (
    //     <img src={url}></img>
    // );

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
