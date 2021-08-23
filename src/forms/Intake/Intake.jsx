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

  const navigateToTray = () => {
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
    let i = 0;
    for (i = 1; i < 100; i++) {
      delete formData?.p1[`text${i}`];
      delete formData?.p2[`text${i}`];
      delete formData?.p3[`text${i}`];
      delete formData?.p4[`text${i}`];
      delete formData?.p5[`text${i}`];
    }
  };

  const handleSubmit = async ({ formData }) => {
    await extractData({ formData });
    const obj = {
      data: JSON.stringify(formData),
      formId: "Intake",
      formStatus: "unpaid",
    };
    await createUpdateForm(obj);
    navigateToTray();
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
