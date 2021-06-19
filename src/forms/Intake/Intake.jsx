import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "@rjsf/bootstrap-4";
import schema from "./Intakeschema";
import uiSchema from "./IntakeUiSchema";
import { readForm, createUpdateForm } from "../../api/formsAccess";

const Intake = () => {
  const [formData, setFormData] = useState();
  const { id } = useParams();
  const isEditMode = !!id;
  const history = useHistory();

  const navigateToForm = (id) => {
    history.push("/screens/UsersPage");
  };

  useEffect(() => {
    if (!isEditMode) return;
    (async () => {
      const values = await readForm(id);
      setFormData(JSON.parse(values.data));
    })();
  }, [isEditMode, id]);

  const extractData = async ({ formData }) => {
    let i;
    for (i = 1; i < 100; i++) {
      const aVolar = `text${i}`;
      delete formData.p1[aVolar];
      delete formData.p2[aVolar];
    }
  };

  const handleSubmit = async ({ formData }) => {
    extractData({ formData });
    const obj = { data: JSON.stringify(formData), formId: "Intake" };
    createUpdateForm(obj, id);
    console.log(`Form ${id} was created/updated`);
    navigateToForm(id);
  };

  return (
    <div className="container">
      <Form
        schema={schema}
        uiSchema={uiSchema}
        formData={formData}
        onSubmit={handleSubmit}
      />
    </div>
  );
};
export default Intake;
