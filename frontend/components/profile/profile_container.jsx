import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { fetchPosts, fetchPost } from '../../actions/post_actions';
import { logout } from '../../actions/session_actions';


class ProfileContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
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

        <li className="single-post">
          <br/>
          <p>Hellow world</p>
          <label className="like-comment-share">
            <i className="fa fa-thumbs-o-up" aria-hidden="true">Like</i>
            <i className="fa fa-commenting-o" aria-hidden="true">Comment</i>
            <i className="fa fa-share" aria-hidden="true">Share</i>
          </label>
        </li>
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
)(ProfileContainer);

// export default ProfileContainer;
