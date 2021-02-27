import React from "react";
import Welcome from "../Login/Welcome";
import Login from "../Login/Login";
import Register from "../Login/Register";

const Guest = () => {
  return (
    <div className="Guest">
      <Welcome />
      <Login />
      <Register />
    </div>
  );
};

export default Guest;
