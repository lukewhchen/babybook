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
    this.state = {
      shownPosts: 3,
      displayModal: false,
      title: "Default Title",
      offsetX: 31
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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

  // closeSearch() {
  //   console.log(this);
  //   if (this.props.searchResults.length > 0) {
  //     this.props.clearSearchResults();
  //   }
  // }

  handleScroll(e) {
    const observer = new IntersectionObserver(
          checkPoint => {
            if ( checkPoint[0].intersectionRatio <= 0) return;
            this.setState( prev => ({shownPosts: prev.shownPosts+3}));
          }
        );
    observer.observe(document.querySelector('.sentinels-1'));
  }

  handleModal(e) {
    const nextTitle = e.target.textContent;
    const mapTitleToX = {
      "Find Friends":31,
      "Create":52,
      "Friend Requests": 63,
      "Messenger": 71,
      "Notifications": 79,
      "Quick Help": 87
    };
    if (nextTitle !== this.state.title) {
      this.setState(() => ({
        displayModal: true,
        title: nextTitle,
        offsetX: mapTitleToX[nextTitle]
      }));
    } else {
      this.setState(prevState => ({
        displayModal: !prevState.displayModal,
        offsetX: mapTitleToX[nextTitle]
      }));
    }
  }

  closeModal(e) {
    if (e.target.className.indexOf('dd') === -1) {
      this.setState(() => ({
        displayModal: false,
      }));
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.handleScroll();
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPosts(this.props.match.params.userId);
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
      <div onClick={this.closeModal}>
        <header className="nav-container" onClick={this.closeSearch}>
          <div className="nav-bar">
              <div className="nav-left">
                <Link to="/"><p className="bb-logo">b</p></Link>
                <SearchBarContainer />
              </div>
              <div className="nav-right">
                <div className="dropdown">
                    <div className="modal" style={{display: this.state.displayModal ? "block" : "none"}}>
                      <div className="modal-from" style={{ left: this.state.offsetX + "%"}}></div>
                      <div className="modal-header">{this.state.title}</div>
                      <div className="modal-body">No New Requests</div>
                      <div className="modal-footer">See All</div>
                    </div>
                </div>
                <div className="user-link2">
                  <i className="fa fa-user-circle" aria-hidden="true"/>
                  <Link to={`/users/${this.props.currentUser.id}`}><p className="dd-text">{this.props.currentUser.fullName}</p></Link>
                </div>
                <Link to="/"><p className="dd-text">Home</p></Link>
                  <div ><p className="dd-text" onClick={this.handleModal}>Find Friends</p></div>
                  <div><p className="dd-text" onClick={this.handleModal}>Create</p></div>
                  <div className="dd-icon friends" onClick={this.handleModal}>Friend Requests</div>
                  <div className="dd-icon messages" onClick={this.handleModal}>Messenger</div>
                  <div className="dd-icon alert" onClick={this.handleModal}>Notifications</div>
                  <div className="dd-icon questions" onClick={this.handleModal}>Quick Help</div>
                <button className="logout-button" onClick={this.props.logout}>Log Out</button>
              </div>
          </div>
        </header>
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
  const user = state.entities.users[ownProps.match.params.userId] || {"last_name": "lest", posts:[]};
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
