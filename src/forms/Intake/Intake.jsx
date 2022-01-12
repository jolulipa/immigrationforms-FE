import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "@rjsf/bootstrap-4";
import schema from "./Intakeschema";
import uiSchema from "./IntakeUiSchema";
import { readForm, createUpdateForm } from "../../api/formsAccess";
import { CLIENT_DATA } from "../../constants/storageKeys";
import { useAppContext } from "../../context/Provider";

const Intake = () => {
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

        if (values) {
          const paquete = JSON.parse(values.data);
          paquete.p1.formStatus = values.formStatus;
          setFormData(paquete);
        } else {
          setFormData(JSON.parse(context.forms[0].data));
        }
      })();
  }, [id, isEditMode, context.forms]);

  const extractData = async ({ cleanData }) => {
    let i = 0;
    for (i = 1; i < 100; i++) {
      delete cleanData?.p1[`text${i}`];
      delete cleanData?.p2[`text${i}`];
      delete cleanData?.p3[`text${i}`];
      delete cleanData?.p4[`text${i}`];
      delete cleanData?.p5[`text${i}`];
    }
  };

  const go = async (cleanData, cliUser, cliEmail, formStatus, edit) => {
    if (edit) {
      formStatus = cleanData.formStatus;
    } else {
      formStatus = "Unpaid";
    }
    const obj = {
      data: JSON.stringify(cleanData),
      formId: "Intake",
      formStatus: formStatus,
      cliUser: cliUser,
    };
    console.log("OBJETO PARA BASE DE DATOS:", obj);
    await createUpdateForm(obj);

    navigateToTray(cliUser, cliEmail, context.intake.role);
  };

  const handleSubmit = async ({ formData }) => {
    let cleanData = { ...formData };
    await extractData({ cleanData });
    if (isEditMode) {
      const { cliUser, cliEmail } = JSON.parse(
        localStorage.getItem(CLIENT_DATA)
      );

      go(cleanData, cliUser, cliEmail, formData.formStatus, isEditMode);
    } else {
      const cliUser = context.intake.userId;
      const cliEmail = context.intake.email;
      go(cleanData, cliUser, cliEmail, formData.formStatus, isEditMode);
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
export default Intake;
