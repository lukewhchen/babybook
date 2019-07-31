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
import { clearSearchResults } from '../../actions/search_actions';
import SearchBarContainer from '../profile/search_bar_container';

class PostContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = { shownPosts: 1 };
    this.handleClick = this.handleClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleClick() {
    let results = this.props.searchResults;
    if (results) {
      this.props.clearSearchResults();
    }
  }

  handleScroll() {
    const observer = new IntersectionObserver(
          checkPoint => {
            if ( checkPoint[0].intersectionRatio <= 0) return;
            this.setState( prev => ({shownPosts: prev.shownPosts+3}));
          }
        );
    observer.observe(document.querySelector('.sentinels'));
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchPosts();
    this.handleScroll();
  }

  render() {
    const currentUser = this.props.currentUser;
    const posts = this.props.posts.slice(0,this.state.shownPosts).map(post => {
      return <PostItem key={post.id} post={post} />;
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
                  <div className="user-link2">
                    <i className="fa fa-user-circle" aria-hidden="true"/>
                    <Link to={`/users/${currentUser.id}`}><p className="home">{currentUser.fullName}</p></Link>
                  </div>
                  <Link to="/"><p className="home">Home</p></Link>
                  <Link to="/"><p className="home">Find Friends</p></Link>
                  <Link to="/"><p className="home">Create</p></Link>
                  <div className="header-icon friends"></div>
                  <div className="header-icon messages"></div>
                  <div className="header-icon alert"></div>
                  <div className="header-icon questions"></div>
                  <button className="logout-button" onClick={this.props.logout}>Log Out</button>
                </div>
            </div>
          </header>
          <div className="mainpage-body">
            <LeftSidebar currentUser={currentUser}/>
            <main className="mainpage-content">
              <PostForm />
              <ul>{posts}</ul>
            </main>
            <aside className="mainpage-ads"><RightSidebar/></aside>
          </div>
          <span className="sentinels">.</span>
        </div>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: Object.values(state.entities.posts).reverse(),
    currentUser: state.entities.users[state.session.id]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchPosts: () => dispatch(fetchPosts()),
  logout: () => dispatch(logout()),
  clearSearchResults: () => dispatch(clearSearchResults()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostContainer);
