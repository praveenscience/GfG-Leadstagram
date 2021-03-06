import React from "react";
import Card from "../Bootstrap/Card";
import FormGroup from "../Bootstrap/FormGroup";

const GuestCardHelper = ({
  Title,
  FormElements,
  children,
  onSubmit,
  AJAXCall
}) => {
  return (
    <div className={Title}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-6 offset-xl-3">
            <Card Header={Title}>
              {children}
              <form onSubmit={onSubmit}>
                {FormElements &&
                  FormElements.map((fg, key) => (
                    <FormGroup {...fg} key={key} />
                  ))}
                <input
                  className="btn btn-primary"
                  type="submit"
                  value={Title}
                  disabled={AJAXCall}
                />
                {AJAXCall && (
                  <span className="ml-2 badge badge-warning">
                    {Title === "Sign In" ? "Logging in..." : "Registering..."}
                  </span>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestCardHelper;
