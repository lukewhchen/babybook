import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = () => {
  return (
    <li className="left-side">
      <label className="left-icon">
        <i className="fa fa-user-circle" aria-hidden="true">&nbsp;&nbsp;User</i><br/>
        <i className="fa fa-newspaper-o" aria-hidden="true">&nbsp;&nbsp;News Feed</i><br/>
        <i className="fa fa-commenting-o" aria-hidden="true">&nbsp;&nbsp;Messenger</i><br/>
        <i className="fa fa-tv" aria-hidden="true">&nbsp;Watch</i><br/>
        <i className="fa fa-calendar" aria-hidden="true">&nbsp;&nbsp;Events</i><br/>
        <i className="fa fa-gamepad" aria-hidden="true">&nbsp;&nbsp;Games</i><br/>
      </label>
    </li>
  );
};

export default LeftSidebar;


// <i className="fa fa-search" aria-hidden="true">Search</i>
// <i className="fa fa-flash" aria-hidden="true" />
// <i className="fa fa-child" aria-hidden="true" />
// <i className="fa fa-ellipsis-h" aria-hidden="true" />
