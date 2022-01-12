import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "@rjsf/bootstrap-4";
import schema from "./i130Aschema";
import uiSchema from "./i130AUiSchema";
import { readForm, createUpdateForm } from "../../api/formsAccess";
import { CLIENT_DATA } from "../../constants/storageKeys";
import { useAppContext } from "../../context/Provider";

const I130A = () => {
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
  }, [isEditMode, id, context.forms]);

  const extractData = async ({ formData }) => {
    let i;
    for (i = 1; i < 100; i++) {
      delete formData?.p1[`text${i}`];
      delete formData?.p2[`text${i}`];
      delete formData?.p3[`text${i}`];
      delete formData?.p4[`text${i}`];
      delete formData?.p5[`text${i}`];
      delete formData?.p6[`text${i}`];
      delete formData?.p7[`text${i}`];
      delete formData?.p8[`text${i}`];
    }
  };

  const go = async (cleanData, cliUser, cliEmail, formStatus, edit) => {
    if (edit) {
      formStatus = cleanData.formStatus;
    } else {
      formStatus = "unpaid";
    }
    const obj = {
      data: JSON.stringify(cleanData),
      formId: "I130A",
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
    <div className="container justify-content-sm-center">
      <div
        className="col-sm-4 "
        style={{
          backgroundColor: "#7ed6fc",
          margin: 20,
          padding: 15,
          borderRadius: "10px",
          border: "5px solid #3f3434",
        }}
      >
        <Form
          schema={schema}
          uiSchema={uiSchema}
          formData={formData}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default I130A;
