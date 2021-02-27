import React from "react";
import GuestCardHelper from "./_Card";
import fe from "./FormElements";

const Login = ({ Values, updateForm }) => {
  const formElements = [fe.Email, fe.Password].map(el => ({
    ...el,
    Value: Values[el.Id],
    onChange: e => {
      updateForm("Login", e.target.name, e.target.value);
    }
  }));
  return <GuestCardHelper Title="Sign In" FormElements={formElements} />;
};

export default Login;
