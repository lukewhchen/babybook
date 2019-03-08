import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from '../session_form/session_form';


const HeadMessage = () => {
  return (
    <div className='welcome-head'>
      <div className='wh-container'>
        <Link to="/">babybook</Link>
        <SessionForm />
      </div>
    </div>
  );
};

export default HeadMessage;
