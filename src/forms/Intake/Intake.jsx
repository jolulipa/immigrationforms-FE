import React from "react";
import Form from "@rjsf/bootstrap-4";
import schema from "./Intakeschema";
import uiSchema from "./IntakeUiSchema";

// import data from "../../forms/IntakeData.json";

const Intake = () => {
  const extractData = ({ formData }) => {
    console.log(formData);
  };
  return (
    <div className="container">
      <Form schema={schema} uiSchema={uiSchema} onSubmit={extractData} />
    </div>
  );
};

export default Intake;
