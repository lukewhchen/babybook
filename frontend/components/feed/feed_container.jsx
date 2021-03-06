import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { fetchPosts, fetchPost } from '../../actions/post_actions';
import { clearSearchResults } from '../../actions/search_actions';
import PostItem from './post_item';
import PostForm from '../form/post_form';
import LeftSidebar from './left_sidebar';
import RightSidebar from './right_sidebar';
import SearchBarContainer from '../nav/search_bar_container';
import NavBar from '../nav/nav_bar';

class FeedContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shownPosts: 1
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchPosts();
    this.props.clearSearchResults();
    this.handleScroll();
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


  render() {
    const currentUser = this.props.currentUser;
    const posts = this.props.posts.slice(0,this.state.shownPosts).map(post => {
      return <PostItem key={post.id} post={post} />;
    });

    return (
        <div>
          <NavBar/>
          <div className="mainpage-body" >
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
  fetchPosts: () => dispatch(fetchPosts()),
  clearSearchResults: () => dispatch(clearSearchResults()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedContainer);
