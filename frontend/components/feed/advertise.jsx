import React from "react";
import AdvertiseContent from "./advertise_content";

const Advertise = () => {



  return (
    <div className="card">
        <div className="card-title">
          <div className="left-icon play"></div>
          <span>Best Places To Visit With Kids</span>
        </div>
        <AdvertiseContent />
        <div className="card-footer">
          <a href="https://www.loveexploring.com/gallerylist/72176/the-best-places-to-visit-with-kids-in-the-usa" target="_blank">More...</a>
        </div>
    </div>
  );
};

export default Advertise;
