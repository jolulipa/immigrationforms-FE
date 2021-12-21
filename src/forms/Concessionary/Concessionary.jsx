import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "@rjsf/bootstrap-4";
import schema from "./concessionaryschema";
import uiSchema from "./concessionaryUiSchema";
import { readForm, createUpdateForm } from "../../api/formsAccess";

const Concessionary = () => {
  const [formData, setFormData] = useState();
  const [obj, setObj] = useState({});
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
      setObj(values);
      setFormData(JSON.parse(values.data));
    })();
  }, [isEditMode, id]);

  const extractData = async ({ formData }) => {
    let i;
    for (i = 1; i < 100; i++) {
      delete formData?.p1[`text${i}`];
    }
  };

  const handleSubmit = async ({ formData }) => {
    extractData({ formData });

    if (!isEditMode) {
      setObj({
        data: JSON.stringify(formData),
        formId: "Intake",
        formStatus: "Unpaid",
      });
    } else {
      setObj({ ...obj, data: JSON.stringify(formData) });
    }

    console.log(obj);
    await createUpdateForm(obj);
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

export default Concessionary;
