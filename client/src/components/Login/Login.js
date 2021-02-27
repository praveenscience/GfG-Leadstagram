import React from "react";
import GuestCardHelper from "./_Card";
import fe from "./FormElements";

const Login = () => {
  return (
    <GuestCardHelper Title="Login" FormElements={[fe.Email, fe.Password]} />
  );
};

export default Login;
