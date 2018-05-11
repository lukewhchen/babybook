import React from 'react';
// import { Link } from 'react-router-dom';
// import postDetail from './post_detail';
// import { ProtectedRoute } from '../../util/route_util';


const postShow = ({ posts, post, fetchPosts, fetchPost}) => {
  return (
    <div>
      <ul>
        {posts.map((post, idx) => {
          return <li key={idx}>{post.body}</li>;
        })}
      </ul>
    </div>
  );
};


export default postShow;
