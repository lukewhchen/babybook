import React from 'react';

const InfoMessage = () => {
  return (
    <div className='left-login'>
      <h2>Connect with friends and the world around you on Babybook.</h2>
      <li>
        <div className="icon update"></div>
        <p><strong>Post the cutest baby picture </strong>on your Timeline</p>.
      </li>
      <li>
        <div className="icon news"></div>
        <p><strong>See photos and updates </strong> from other parents.</p>
      </li>
      <li>
        <div className="icon more"></div>
        <p><strong>Find more parenting information </strong> in your News Feed.</p>
      </li>
    </div>
  );
};

export default InfoMessage;
