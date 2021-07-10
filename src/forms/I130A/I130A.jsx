import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "@rjsf/bootstrap-4";
import schema from "./i130Aschema";
import uiSchema from "./i130AUiSchema";
import { readForm, createUpdateForm } from "../../api/formsAccess";

const I130A = () => {
  const [formData, setFormData] = useState();
  const { id } = useParams();
  const isEditMode = !!id;
  const history = useHistory();

  const navigateToPage = () => {
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
      delete formData.p3[aVolar];
      delete formData.p4[aVolar];
      delete formData.p5[aVolar];
      delete formData.p6[aVolar];
      delete formData.p7[aVolar];
      delete formData.p8[aVolar];
    }
  };

  const handleSubmit = async ({ formData }) => {
    extractData({ formData });
    const obj = { data: JSON.stringify(formData), formId: "I130A" };
    createUpdateForm(obj);
    navigateToPage();
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

export default I130A;
