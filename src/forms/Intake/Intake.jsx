import React from "react";
import Form from "@rjsf/bootstrap-4";
import schema from "./Intakeschema";
import uiSchema from "./IntakeUiSchema";

const Intake = () => {
  return (
    <div className="container">
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={(f) => console.log(f)}
      />
    </div>
  );
};

export default Intake;
