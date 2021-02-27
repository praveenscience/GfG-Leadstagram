import React from "react";
import { Route } from "react-router-dom";
import Welcome from "../Login/Welcome";
import Login from "../Login/Login";
import Register from "../Login/Register";

const Guest = () => {
  return (
    <div className="Guest">
      <Route path="/" exact={true} component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </div>
  );
};

export default Guest;
