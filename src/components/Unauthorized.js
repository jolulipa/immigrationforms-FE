import React from "react";
import { Link } from "react-router-dom";

const Unauthorized = () => {
  return (
    <div className="container">
      <div>
        <h1 className="alert alert-danger text-center">
          <strong>403</strong>- Not authorized
        </h1>
        <p className="text-center">
          you need to register or login to access this page!
          <br />
          Maybe you have a typo in the url? Or you meant to go to a different
          location?
        </p>
      </div>
      <p>
        <Link
          className="col-md-4 offset-md-4 badge badge-pill badge-info"
          to="/"
        >
          Back to Home
        </Link>
      </p>
    </div>
  );
};

export default Unauthorized;
