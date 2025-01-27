import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="home__presentation">
        <video
          className="home__presentation__video"
          autoPlay
          muted
          loop
          poster="/assets/images/logo.jpg"
        >
          <source
            src="/assets/videos/presentation-light.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Home;
