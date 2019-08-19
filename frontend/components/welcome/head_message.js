import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from '../form/session_form';


const HeadMessage = () => {
  return (
    <div className='welcome-head'>
      <div className='wh-container'>
        <div className='logo'>
          <Link to="/">Babybook</Link>
        </div>
        <SessionForm />
      </div>
    </div>
  );
};

export default HeadMessage;
