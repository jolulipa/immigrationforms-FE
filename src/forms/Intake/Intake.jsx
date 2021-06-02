import React from "react";
import Form from "@rjsf/bootstrap-4";
import schema from "./Intakeschema";
import uiSchema from "./IntakeUiSchema";
import { createForm } from "../../api/formsAccess";

const Intake = () => {
  const formId = "Intake";
  const extractData = async ({ formData }) => {
    formData.formId = formId;
    console.log(formData);
    let i;
    for (i = 1; i < 100; i++) {
      const aVolar = `text${i}`;
      delete formData.p1[aVolar];
      delete formData.p2[aVolar];
    }
    //guardar data en db
    const result = await createForm(formData);
    //verificar si se guardó
    if (result.status === 200) {
      console.log("Intake Form created");
      //go to  pathname: "/screens/UsersPage"
      //return ???
    } else {
      throw new Error(`HTTP error! status: ${result.status}`);
    }
  };
  return (
    <div className="container">
      <Form schema={schema} uiSchema={uiSchema} onSubmit={extractData} />
    </div>
  );
};
export default Intake;
