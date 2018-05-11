import React from 'react';
// import { Link } from 'react-router-dom';
// import postDetail from './post_detail';
// import { ProtectedRoute } from '../../util/route_util';



class postShow extends React.Component {

  componentDidMount() {
    const { posts, post, fetchPosts, fetchPost } = this.props;
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.post}
        </ul>
      </div>
    );
  }
}



export default postShow;
