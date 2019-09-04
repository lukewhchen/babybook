import React from "react";

const AdvertiseContent = () => {
  return(
    <div className="album-ad">
      <a className="single-photo advert cas" href="https://www.calacademy.org/" target="_blank">
        <p>California Academy of Sciences</p>
      </a>
      <a className="single-photo advert aquarium" href="https://www.montereybayaquarium.org/" target="_blank">
        <p>Monterey Bay Aquarium</p>
      </a>
      <a className="single-photo advert legoland" href="https://www.legoland.com/california/" target="_blank">
        <p>Legoland</p>
      </a>
      <a className="single-photo advert kidspace" href="https://www.kidspacemuseum.org/" target="_blank">
        <p>Kidspace Museum</p>
      </a>
      <a className="single-photo advert zoo" href="https://zoo.sandiegozoo.org/" target="_blank">
        <p>San Diego Zoo</p>
      </a>
      <a className="single-photo advert disney" href="https://disneyworld.disney.go.com/" target="_blank">
        <p>Disney World</p>
      </a>
    </div>
  );
};

export default AdvertiseContent;
