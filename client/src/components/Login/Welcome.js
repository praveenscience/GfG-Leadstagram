import React from "react";
import Banner from "../../assets/WelcomeBanner.png";

const Welcome = () => {
  return (
    <div className="Welcome">
      <h1>Welcome to Leadstagram</h1>
      <img src={Banner} alt="Welcome to Leadstagram" />
    </div>
  );
};

export default Welcome;
