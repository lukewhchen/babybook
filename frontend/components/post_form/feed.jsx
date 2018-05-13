import React from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/user_actions';
// import { fetchTrends } from '../../actions/trending_actions';
import { Link } from 'react-router-dom';
import PostShow from './post_show';
import PostForm from './post_form';
// import LeftSide from './left_side'
// import RightSide from './right_side'
// import { ScaleLoader } from 'react-spinners';
import _ from 'lodash';

class Feed extends React.Component{
  // componentDidMount(){
  //   this.props.fetchUsers();
  // }

  render(){
    const { postIds, currentUser } = this.props;
    const postList = this.props.postIds.map( id => {
      return <PostShow key={id} postId={id}/>;
    });

    return (
      <div id='main-container'>
        <main className='main-body'>
            <PostForm />
            {postList}
        </main>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});
// session.currentUser change back to session.id
const mapStateToProps = state => {
  const postIds = state.session.currentUser.feedIds;
  return {
    postIds,
    currentUser: state.session.currentUser,
  };
};



export default connect(mapStateToProps, mapDispatchToProps)(Feed);
