import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "@rjsf/bootstrap-4";
import schema from "./N400schema";
import uiSchema from "./N400UiSchema";
import { readForm, createUpdateForm } from "../../api/formsAccess";
import { CLIENT_DATA } from "../../constants/storageKeys";
import { useAppContext } from "../../context/Provider";
import { BiLeftArrowCircle } from "react-icons/bi";

const N400 = () => {
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
          paquete.formStatus = values.formStatus;
          setFormData(paquete);
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

  const go = async (cleanData, cliUser, cliEmail, formStatus, edit) => {
    if (edit) {
      formStatus = cleanData.formStatus;
    } else {
      formStatus = "unpaid";
    }
    const obj = {
      data: JSON.stringify(cleanData),
      formId: "N400",
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
        className="col-lg-4"
        style={{
          backgroundColor: "#7ed6fc",
          margin: 5,
          padding: 10,
          borderRadius: "10px",
          border: "5px solid #3f3434",
        }}
      >
        <p
          className="d-flex justify-content-end"
          style={{
            color: "red",
          }}
        >
          Please click&nbsp;{" "}
          <span className="d-flex justify-content-end">
            {" "}
            <BiLeftArrowCircle style={{ fontSize: 24, color: "black" }} />
          </span>
          &nbsp;above, To go back to your forms.
        </p>
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

export default N400;
