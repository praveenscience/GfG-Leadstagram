import React from "react";
import Card from "../Bootstrap/Card";

const GuestCardHelper = ({ Title, children }) => {
  return (
    <div className={Title}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
            <Card Header={Title}>{children}</Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestCardHelper;
