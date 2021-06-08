import React from "react";
import Form from "@rjsf/bootstrap-4";
import schema from "./Intakeschema";
import uiSchema from "./IntakeUiSchema";
import { createForm } from "../../api/formsAccess";

const Intake = () => {
  const extractData = ({ formData }) => {
    let i;
    for (i = 1; i < 100; i++) {
      const aVolar = `text${i}`;
      delete formData.p1[aVolar];
      delete formData.p2[aVolar];
    }

    const obj = { data: formData, formId: "Intake" };
    createForm(obj);
  };

  return (
    <div className="container">
      <Form schema={schema} uiSchema={uiSchema} onSubmit={extractData} />
    </div>
  );
};
export default Intake;
