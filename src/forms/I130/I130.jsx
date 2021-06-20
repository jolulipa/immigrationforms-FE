import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "@rjsf/bootstrap-4";
import schema from "./i130schema";
import uiSchema from "./i130UiSchema";
import { readForm, createUpdateForm } from "../../api/formsAccess";

const I130 = () => {
  const [formData, setFormData] = useState();
  const { id } = useParams();
  const isEditMode = !!id;

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
    const obj = { data: JSON.stringify(formData), formId: "I130" };
    createUpdateForm(obj, id);
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

export default I130;
