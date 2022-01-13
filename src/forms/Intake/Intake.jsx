import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
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

  const navigateToWelcome = () => {
    history.push(`/${context?.concessionary?.concessionary}`);
  };
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
    <div className="container d-flex justify-content-center">
      <div
        className="col-md-4"
        style={{
          backgroundColor: "#7ed6fc",
          margin: 5,
          padding: 10,
          borderRadius: "10px",
          border: "5px solid #3f3434",
        }}
      >
        <Form
          schema={schema}
          uiSchema={uiSchema}
          formData={formData}
          onSubmit={handleSubmit}
        >
          <div className="d-flex  justify-content-around">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Button
              type="button"
              className="btn btn-danger"
              onClick={navigateToWelcome}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};
export default Intake;
