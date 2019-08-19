import React from 'react';
import { Link } from 'react-router-dom';

const LeftSidebar = ({ currentUser }) => {
  return (
      <div className="left-side">
        <li>
          <Link className="left-icon" to={`/users/${currentUser.id}`}>
            <i className="fa fa-user-circle ll" aria-hidden="true"></i>
            <label>{currentUser.fullName}</label>
          </Link>
        </li>
        <li>
          <div className="left-icon newsfeed"></div>
          <label>News Feed</label>
        </li>
        <li>
          <div className="left-icon messenger"></div>
          <label>Messenger</label>
        </li>
        <li>
          <div className="left-icon video"></div>
          <label>Videos on Watch</label>
        </li>
        <li>
          <div className="left-icon marketplace"></div>
          <label>Marketplace</label>
        </li>
        <p className='explore'>Explore</p>
        <li>
          <a className="left-icon" href='https://lukewhchen.github.io/Flip/' target='_blank'>
            <i className="fa fa-gamepad" aria-hidden="true"></i>
            <label>Puzzle Game</label>
          </a>
        </li>
        <li>
          <a className="left-icon" href='https://www.linkedin.com/in/luke-chen-42342458/' target='_blank'>
            <i className="fa fa-linkedin-square" aria-hidden="true"></i>
            <label>&nbsp;LinkedIn</label>
          </a>
        </li>
        <li>
          <a className="left-icon" href='https://github.com/lukewhchen' target='_blank'>
            <i className="fa fa-github" aria-hidden="true"></i>
            <label>&nbsp;Github</label>
          </a>
        </li>
        <li>
          <a className="left-icon" href='https://lukewhchen.github.io/' target='_blank'>
            <i className="fa fa-tv" aria-hidden="true"></i>
            <label>Portfolio</label>
          </a>
        </li>
      </div>
  );
};

export default LeftSidebar;
