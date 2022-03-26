import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "@rjsf/bootstrap-4";
import { readForm } from "../api/formsAccess";
import { useAppContext } from "../context/Provider";
import { BiLeftArrowCircle } from "react-icons/bi";
import HandleSubmitForms from "./HandleSubmitForms";
import { AUTH_TOKEN } from "../constants/storageKeys";

import intakes from "./Intake/Intakeschema";
import intakeu from "./Intake/IntakeUiSchema";
import i90s from "./I90/i90schema";
import i90u from "./I90/i90UiSchema";
import i130s from "./I130/i130schema";
import i130u from "./I130/i130UiSchema";
import i130As from "./I130A/i130Aschema";
import i130Au from "./I130A/i130AUiSchema";
import i485s from "./I485/i485schema";
import i485u from "./I485/i485UiSchema";
import i765s from "./I765/i765schema";
import i765u from "./I765/i765UiSchema";
import n400s from "./N400/N400schema";
import n400u from "./N400/N400UiSchema";

const Handler = ({ formName, clientId }) => {
  let schema, uiSchema;
  switch (formName) {
    case "Intake":
      schema = intakes;
      uiSchema = intakeu;
      console.log("Formulario=", formName);
      break;
    case "I130":
      schema = i130s;
      uiSchema = i130u;
      console.log("Formulario=", formName);
      break;
    case "I130A":
      schema = i130As;
      uiSchema = i130Au;
      console.log("Formulario=", formName);
      break;
    case "I90":
      schema = i90s;
      uiSchema = i90u;
      console.log("Formulario=", formName);
      break;
    case "I485":
      schema = i485s;
      uiSchema = i485u;
      console.log("Formulario=", formName);
      break;
    case "I765":
      schema = i765s;
      uiSchema = i765u;
      console.log("Formulario=", formName);
      break;
    case "N400":
      schema = n400s;
      uiSchema = n400u;
      console.log("Formulario=", formName);
      break;
    default:
      console.log(`Sorry, we are out of ${formName}.`);
  }

  const token = localStorage.getItem(AUTH_TOKEN) || "";
  const { state: context } = useAppContext();
  const isEditMode = !!clientId;
  const history = useHistory();
  const [formData, setFormData] = useState();

  const navigateToWelcome = () => {
    history.push(`/${context.concessionary.concessionary}`);
  };

  useEffect(() => {
    if (isEditMode)
      (async () => {
        const values = await readForm(clientId, token);

        if (values) {
          const paquete = JSON.parse(values?.data);
          paquete.p1.formStatus = values.formStatus;
          setFormData(paquete);
        } else {
          context.forms[0]
            ? setFormData(JSON.parse(context.forms[0].data))
            : setFormData({});
        }
      })();
  }, [clientId, isEditMode, context.forms, token]);

  const handleSubmit = async ({ formData }) => {
    HandleSubmitForms(
      "Intake",
      isEditMode,
      formData,
      context.intake.role,
      context.intake.userId,
      context.intake.email
    );
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
export default Handler;
