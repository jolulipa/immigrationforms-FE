import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "@rjsf/bootstrap-4";
import { readForm } from "../api/formsAccess";
import { useAppContext } from "../context/Provider";
import { BiLeftArrowCircle } from "react-icons/bi";
import { useHandleSubmitForms } from "./handleSubmitForms";
import { AUTH_TOKEN } from "../constants/storageKeys";
// import intakes from "./Intake/Intakeschema";
import Intake1 from "./Intake/Intakeschema1";
import Intake2 from "./Intake/Intakeschema2";
import Intake3 from "./Intake/Intakeschema3";
import Intake4 from "./Intake/Intakeschema4";
import Intakeu from "./Intake/IntakeUiSchema";
import I901 from "./I90/i90schema";
import I90u from "./I90/i90UiSchema";
import I1301 from "./I130/i130schema1";
import I1302 from "./I130/i130schema2";
import I1303 from "./I130/i130schema3";
import I1304 from "./I130/i130schema4";
import I130u from "./I130/i130UiSchema";
import I130A1 from "./I130A/i130Aschema";
import I130Au from "./I130A/i130AUiSchema";
import I4851 from "./I485/i485schema";
import I485u from "./I485/i485UiSchema";
import I7651 from "./I765/i765schema";
import I765u from "./I765/i765UiSchema";
import N4001 from "./N400/N400schema";
import N400u from "./N400/N400UiSchema";

const Handler = ({ formName, clientId }) => {
  let schemas = {
    Intake1,
    Intake2,
    Intake3,
    Intake4,
    Intakeu,
    I901,
    I90u,
    I1301,
    I1302,
    I1303,
    I1304,
    I130u,
    I130A1,
    I130Au,
    I4851,
    I485u,
    I7651,
    I765u,
    N4001,
    N400u,
  };

  const { handleSubmitForms } = useHandleSubmitForms();

  const token = localStorage.getItem(AUTH_TOKEN) || "";
  const { state: context } = useAppContext();
  const isEditMode = !!clientId;
  const history = useHistory();
  const [formData, setFormData] = useState();
  const [schema, setSchema] = useState(schemas[`${formName}` + 1]);

  let formImported = schemas[`${formName}` + 1],
    uiSchema = schemas[`${formName}u`];

  // console.log(
  //   "HANDLER para Formulario:",
  //   formName,
  //   "-  UiSchema:",
  //   `${formName}u`
  // );

  const navigateToWelcome = () => {
    history.push(`/${context.concessionary.concessionary}`);
  };

  const navigateToP1 = () => {
    formImported = schemas[`${formName}` + 1];
    // console.log("P1:", formImported);
    setSchema(formImported);
  };

  const navigateToP2 = () => {
    formImported = schemas[`${formName}` + 2];
    // console.log("P2:", formImported);
    setSchema(formImported);
  };

  const navigateToP3 = () => {
    formImported = schemas[`${formName}` + 3];
    // console.log("P3:", formImported);
    setSchema(formImported);
  };

  const navigateToP4 = () => {
    formImported = schemas[`${formName}` + 4];
    // console.log("P4:", formImported);
    setSchema(formImported);
  };

  const handleSubmit = ({ formData }) => {
    handleSubmitForms(
      formName,
      isEditMode,
      formData,
      context.intake.role,
      context.intake.userId,
      context.intake.email
    );
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

  return (
    <div className="container d-flex justify-content-center">
      <div
        className="row g-3"
        style={{
          backgroundColor: "#7ed6fc",
          margin: 5,
          padding: 10,
          borderRadius: "10px",
          border: "5px solid #3f3434",
        }}
      >
        <p
          className="d-flex justify-content-center"
          style={{
            color: "red",
          }}
        >
          Please click&nbsp;{" "}
          <span>
            {" "}
            <BiLeftArrowCircle style={{ fontSize: 24, color: "black" }} />
          </span>
          &nbsp;above, To go back to your forms.
        </p>
        <div
          className="d-flex justify-content-around"
          style={{ marginBottom: 20 }}
        >
          <Button
            type="button"
            className="btn btn-success"
            onClick={navigateToP1}
          >
            Page 1
          </Button>
          <Button
            type="button"
            className="btn btn-light"
            onClick={navigateToP2}
          >
            Page 2
          </Button>
          <Button
            type="button"
            className="btn btn-secondary"
            onClick={navigateToP3}
          >
            Page 3
          </Button>
          <Button
            type="button"
            className="btn btn-danger"
            onClick={navigateToP4}
          >
            Page 4
          </Button>
        </div>
        <div className="col-auto">
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
    </div>
  );
};
export default Handler;
