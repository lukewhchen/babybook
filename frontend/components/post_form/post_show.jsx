import React from 'react';
// import { Link } from 'react-router-dom';
// import postDetail from './post_detail';
// import { ProtectedRoute } from '../../util/route_util';



class postShow extends React.Component {

  componentDidMount() {
    this.props.fetchPost(this.props.postId);
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
