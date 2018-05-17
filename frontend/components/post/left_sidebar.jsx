import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  return (
    <div id="left-side">
      <h3>Personal information</h3>
      <Link to='/'>
        <i className="fa fa-newspaper-o" aria-hidden="true"></i>
        News Feed
      </Link>
      <li>
        <i className="fa fa-commenting-o" aria-hidden="true" />
        Comment
      </li>
      <li>
        <i className="fa fa-thumbs-o-up" aria-hidden="true" />
        Like
      </li>
      <li>
        <i className="fa fa-share" aria-hidden="true" />
        Share
      </li>
      <li>
        <i className="fa fa-search" aria-hidden="true" />
        Search
      </li>
      <li>
        <i className="fa fa-user-circle" aria-hidden="true" />
        User
      </li>
      <li>
        <i className="fa fa-flash" aria-hidden="true" />
      </li>
      <li>
        <i className="fa fa-child" aria-hidden="true" />
      </li>
      <li>
        <i className="fa fa-ellipsis-h" aria-hidden="true" />
      </li>


    </div>
  );
};

export default LeftSidebar;
