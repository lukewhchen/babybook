import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { fetchPosts, fetchPost } from '../../actions/post_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import PostForm from '../post/post_form';
import PostItem from '../post/post_item';
// import { showDropdown, hideDropdown } from '../../actions/dropdown_actions';
import { clearSearchResults } from '../../actions/search_actions';
import SearchBarContainer from './search_bar_container';
// import NavBar from '../nav/nav_bar';

class ProfileContainer extends React.Component {
  constructor(props){
    super(props);
    // this.toggleDropdown = this.toggleDropdown.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  // toggleDropdown(component) {
  //   return () => {
  //     if (this.props.dropdownDisplayed) {
  //       this.props.hideDropdown();
  //     } else {
  //       this.props.showDropdown(component);
  //     }
  //   };
  // }

  handleClick() {
    if (this.props.searchResults.length > 0) {
      this.props.clearSearchResults();
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.handleClick();
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
        <header className="nav-container" onClick={this.handleClick}>
          <div className="nav-bar">
              <div className="nav-left">
                <Link to="/"><p className="bb-logo">b</p></Link>
                <SearchBarContainer />
              </div>
              <div className="nav-right">
                <Link className="user-link" to={`/users/${this.props.currentUser.id}`}>
                <i className="fa fa-user-circle" aria-hidden="true"/>{this.props.currentUser.fullName}</Link>
                <Link to="/"><p className="home">HOME</p></Link>
                <button className="logout-button" onClick={this.props.logout}>Log Out</button>
              </div>
          </div>
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
              <p><strong>User name:</strong> <em>{this.props.user.fullName}</em></p>
              <p><strong>Email:</strong> <em>{this.props.user.email}</em></p>
              <p><strong>Hometown:</strong> <em>{this.props.user.hometown || "null"}</em></p>
              <p><strong>Workplace:</strong> <em>{this.props.user.workplace || "null"}</em></p>
              <p><strong>School:</strong> <em>{this.props.user.school || "null"}</em></p>
              <p><strong>Gender:</strong> <em>{this.props.user.gender || "null"}</em></p>
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

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId] || {"last_name": "lest", posts:[]};
  const dropdownDisplayed = (
    state.ui.dropdown.displayed
  );
  return {
    user,
    currentUser: state.entities.users[state.session.id],
    posts: Object.values(state.entities.posts),
    searchResults: state.ui.searchResults,
    users: state.entities.users,
    dropdownDisplayed,
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchUser: userId => dispatch(fetchUser(userId)),
  // fetchUsers: () => dispatch(fetchUsers()),
  fetchPosts: userId => dispatch(fetchPosts(userId)),
  clearSearchResults: () => dispatch(clearSearchResults()),
  // showDropdown: component => dispatch(showDropdown(component)),
  // hideDropdown: () => dispatch(hideDropdown()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
