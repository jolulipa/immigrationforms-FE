import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "@rjsf/bootstrap-4";
import schema from "./i130schema";
import uiSchema from "./i130UiSchema";
import { readForm, createUpdateForm } from "../../api/formsAccess";
import { CLIENT_DATA } from "../../constants/storageKeys";
import { useAppContext } from "../../context/Provider";

const I130 = () => {
  const { state: context } = useAppContext();
  const { id } = useParams();
  const isEditMode = !!id;
  const history = useHistory();
  const [formData, setFormData] = useState();

  const navigateToTray = (id, email, role) => {
    history.push({
      pathname: "/screens/UsersPage",
      state: {
        id,
        email,
        role,
      },
    });
  };

  useEffect(() => {
    if (isEditMode)
      (async () => {
        const values = await readForm(id);
        console.log("lei datos del form:", values);
        if (values) {
          setFormData(JSON.parse(values.data));
        } else {
          setFormData(JSON.parse(context.forms[0].data));
        }
      })();
  }, [isEditMode, id, context.forms]);

  const extractData = async ({ cleanData }) => {
    let i;
    for (i = 1; i < 100; i++) {
      delete cleanData?.p1[`text${i}`];
      delete cleanData?.p2[`text${i}`];
      delete cleanData?.p3[`text${i}`];
      delete cleanData?.p4[`text${i}`];
      delete cleanData?.p5[`text${i}`];
      delete cleanData?.p6[`text${i}`];
      delete cleanData?.p7[`text${i}`];
      delete cleanData?.p8[`text${i}`];
    }
  };

  const go = async (cleanData, cliUser, cliEmail) => {
    const obj = {
      data: JSON.stringify(cleanData),
      formId: "I130",
      formStatus: "Unpaid",
      cliUser: cliUser,
    };
    const response = await createUpdateForm(obj);
    console.log("RESPUESTA:", response, obj);
    if (response) navigateToTray(cliUser, cliEmail, context.intake.role);
  };

  const handleSubmit = async ({ formData }) => {
    let cleanData = { ...formData };
    await extractData({ cleanData });
    if (isEditMode) {
      const { cliUser, cliEmail } = JSON.parse(
        localStorage.getItem(CLIENT_DATA)
      );
      go(cleanData, cliUser, cliEmail);
    } else {
      const cliUser = context.intake.userId;
      const cliEmail = context.intake.email;
      go(cleanData, cliUser, cliEmail);
    }
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
