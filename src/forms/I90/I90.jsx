import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "@rjsf/bootstrap-4";
import schema from "./I90schema";
import uiSchema from "./I90UiSchema";
import { readForm } from "../../api/formsAccess";
import { useAppContext } from "../../context/Provider";
import { BiLeftArrowCircle } from "react-icons/bi";
import HandleSubmitForms from "../HandleSubmitForms";
import { AUTH_TOKEN } from "../../constants/storageKeys";

const I90 = () => {
  const token = localStorage.getItem(AUTH_TOKEN) || "";
  const { state: context } = useAppContext();
  const { id } = useParams();
  const isEditMode = !!id;
  const history = useHistory();
  const [formData, setFormData] = useState();

  const navigateToWelcome = () => {
    history.push(`/${context?.concessionary?.concessionary}`);
  };

  useEffect(() => {
    if (isEditMode)
      (async () => {
        const values = await readForm(id, token);

        if (values) {
          const paquete = JSON.parse(values.data);
          paquete.p1.formStatus = values.formStatus;
          setFormData(paquete);
        } else {
          setFormData(JSON.parse(context.forms[0].data));
        }
      })();
  }, [id, isEditMode, context.forms]);

  const handleSubmit = async ({ formData }) => {
    HandleSubmitForms(
      "I90",
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
export default I90;
