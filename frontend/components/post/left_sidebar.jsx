import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = ({ currentUser }) => {
  return (
    <li className="left-side">
      <label className="left-icon">
        <Link to={`/users/${currentUser.id}`}>
        <i className="fa fa-user-circle" aria-hidden="true"><ul>&nbsp;&nbsp;{currentUser.fullName}</ul></i><br/></Link>
        <a href='https://www.independent.co.uk/topic/babies' target='_blank'>
          <i className="fa fa-newspaper-o" aria-hidden="true"><ul>&nbsp;&nbsp;More Babies</ul></i><br/></a>
        <a href='https://lukewhchen.github.io/Flip/' target='_blank'>
          <i className="fa fa-gamepad" aria-hidden="true"><ul>&nbsp;&nbsp;Puzzle Game</ul></i><br/></a>
        <a href='https://www.linkedin.com/in/luke-chen-42342458/' target='_blank'>
          <i className="fa fa-linkedin-square" aria-hidden="true"><ul>&nbsp;&nbsp;LinkedIn</ul></i><br/></a>
        <a href='https://github.com/lukewhchen' target='_blank'>
          <i className="fa fa-github" aria-hidden="true"><ul>&nbsp;&nbsp;Github</ul></i><br/></a>
        <a href='https://lukewhchen.github.io/' target='_blank'>
          <i className="fa fa-tv" aria-hidden="true"><ul>&nbsp;Portfolio</ul></i><br/></a>
      </label>
    </li>
  );
};

export default LeftSidebar;
