import React from 'react';
import { Link } from 'react-router-dom';
import SessionForm from '../session_form/session_form';


const HeadMessage = () => {
  return (
    <div className='welcome-head'>
      <Link to="/">babybook</Link>
      <SessionForm />
    </div>
  );
};

export default HeadMessage;
