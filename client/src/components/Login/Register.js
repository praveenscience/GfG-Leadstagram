import React from "react";
import GuestCardHelper from "./_Card";
import fe from "./FormElements";

const Register = () => {
  return (
    <GuestCardHelper
      Title="Register"
      FormElements={[fe.Email, fe.Password, fe.ConfPass, fe.FullName]}
    />
  );
};

export default Register;
