import React from 'react';
import InfoMessage from './info_message';
import FooterMessage from './footer_message';
import ASignupFormContainer from '../session_form/another_signup_form_container';

const Welcome = () => {
  return (
    <div>
      <InfoMessage />
      <ASignupFormContainer />
      <FooterMessage />
    </div>
  );
};

export default Welcome;
