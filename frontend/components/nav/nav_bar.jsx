import React from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
// import { fetchPosts, fetchPost } from '../../actions/post_actions';
import { fetchUser, fetchUsers } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
// import PostForm from '../post/post_form';
// import PostItem from '../post/post_item';
import { showDropdown, hideDropdown } from '../../actions/dropdown_actions';
// import { clearSearchResults } from '../../actions/search_actions';
import SearchBarContainer from '../profile/search_bar_container';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.toggleDropdown = this.toggleDropdown.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  toggleDropdown(component) {
    return () => {
      if (this.props.dropdownDisplayed) {
        this.props.hideDropdown();
      } else {
        this.props.showDropdown(component);
      }
    };
  }

  // handleClick() {
  //   if (this.props.searchResults.length > 0) {
  //     this.props.clearSearchResults();
  //   }
  // }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchUser(this.props.match.params.userId);
    this.props.fetchPosts(this.props.match.params.userId);
  }

  render() {
    return (
      <div>
          <Link to="/"><p className="mp-header">b</p></Link>
          <SearchBarContainer />
          <p className="current-user">
            <Link className="user-link" to={`/users/${this.props.currentUser.id}`}>
              <i className="fa fa-user-circle" aria-hidden="true"/>{this.props.currentUser.fullName}</Link>
          </p>
          <button className="logout-button" onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }
}
// tp6 console 第二次才抓到user資料

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
  fetchUsers: () => dispatch(fetchUsers()),
  showDropdown: component => dispatch(showDropdown(component)),
  hideDropdown: () => dispatch(hideDropdown()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
