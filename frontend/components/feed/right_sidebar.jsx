import React from 'react';
import Advertise from './advertise';
import Weather from './weather';

const RightSidebar = () => {
  return (
    <div className="right-side">
      <Weather />
      <Advertise />
    </div>
  );
};

export default RightSidebar;
