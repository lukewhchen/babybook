import React from 'react';
import InfoMessage from './info_message';
import FooterMessage from './footer_message';
import SignupForm from '../session_form/signup_form';
import HeadMessage from './head_message';

const Welcome = () => {
  return (
    <div className="wel-container">
      <HeadMessage />
      <div className="welcome-body">
        <InfoMessage />
        <SignupForm />
      </div>
      <FooterMessage />
    </div>
  );
};

export default Welcome;
