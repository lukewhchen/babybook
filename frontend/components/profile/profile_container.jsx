import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { fetchPosts, fetchPost } from '../../actions/post_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import PostForm from '../form/post_form';
import PostItem from '../feed/post_item';
// import { showDropdown, hideDropdown } from '../../actions/dropdown_actions';
import { clearSearchResults } from '../../actions/search_actions';
import SearchBarContainer from '../nav/search_bar_container';
import NavBar from '../nav/nav_bar';

class ProfileContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shownPosts: 3
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    // this.toggleDropdown = this.toggleDropdown.bind(this);
    // this.closeSearch = this.closeSearch.bind(this);
    // this.clearSearchResults = this.clearSearchResults.bind(this);
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

  handleScroll(e) {
    const observer = new IntersectionObserver(
          checkPoint => {
            if ( checkPoint[0].intersectionRatio <= 0) return;
            this.setState( prev => ({shownPosts: prev.shownPosts+3}));
          }
        );
    observer.observe(document.querySelector('.sentinels-1'));
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.handleScroll();
    this.props.clearSearchResults();
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPosts();
  }

  render() {
    const personalPosts = this.props.posts.filter( post => post.author_id === this.props.user.id)
    const userPosts = personalPosts.slice(0,this.state.shownPosts).map(post => {
        return <PostItem key={post.id} post={post} />;
    });
    const userPhotos = personalPosts.slice(0,9).map(post => {
        return <div key={post.id} className="single-photo"><img src={post.image_url}/></div>;
    });
    return (
      <div>
        <NavBar />
        <div className="profile-image">
          <img src={this.props.user.cover_photo_url}/>
          <img src={this.props.user.profile_photo_url}/>
          <div className="profile-name"><li>{this.props.user.fullName}</li></div>
          <div className="profile-navbar">
            <li>Timeline</li>
            <li>About</li>
            <li>Friends</li>
            <li>Photos</li>
            <li>More</li>
          </div>
        </div>

        <div className="profile-body">
          <div className="profile-info">
            <div className="user-intro">
              <div className="profile-icon globe"><p>Intro</p></div>
              <p>I just find myself happy with the simple things. Appreciating the blessings god gave me.</p>
              <p><strong>User Name:</strong>&nbsp;{this.props.user.fullName}</p>
              <p><strong>Email:</strong>&nbsp;{this.props.user.email}</p>
              <p><strong>Hometown:</strong>&nbsp;{this.props.user.hometown || "San Francisco"}</p>
              <p><strong>Workplace:</strong>&nbsp;{this.props.user.workplace || "Fortune 500 "}</p>
              <p><strong>School:</strong>&nbsp;{this.props.user.school || "Stanford University"}</p>
              <p><strong>Gender:</strong>&nbsp;{this.props.user.gender || "Unspecified"}</p>
            </div>
            <div className="user-intro">
              <div className="profile-icon photo"><p>Photos</p></div>
              <div className="album">
                {userPhotos}
              </div>
            </div>
          </div>
          <div className="profile-content">
            <PostForm />
            <ul>{userPosts}</ul>
            <span className="sentinels-1">.</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.match.params.userId] || {"last_name": "last", posts:[]};
  const dropdownDisplayed = (
    state.ui.dropdown.displayed
  );
  return {
    user,
    currentUser: state.entities.users[state.session.id],
    posts: Object.values(state.entities.posts).reverse(),
    searchResults: state.ui.searchResults,
    users: state.entities.users,
    dropdownDisplayed,
  };
};
// check fetchPost function on backend
const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
  fetchPosts: () => dispatch(fetchPosts()),
  clearSearchResults: () => dispatch(clearSearchResults()),
  // showDropdown: component => dispatch(showDropdown(component)),
  // hideDropdown: () => dispatch(hideDropdown()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer);
