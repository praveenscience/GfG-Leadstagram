import React from "react";
import GuestCardHelper from "./_Card";
import fe from "./FormElements";

const Register = ({ Values, updateForm }) => {
  const formElements = [fe.Email, fe.Password, fe.ConfPass, fe.FullName].map(
    el => ({
      ...el,
      Value: Values[el.Id],
      onChange: e => {
        updateForm("Register", e.target.name, e.target.value);
      }
    })
  );
  return <GuestCardHelper Title="Register" FormElements={formElements} />;
};

export default Register;
