import React, { useState } from "react";
import Form from "@rjsf/bootstrap-4";
import schema from "./i130schema";
import uiSchema from "./i130UiSchema";
import { readForm, createForm, updateForm } from "../../api/formsAccess";

//variables/parametros a recibir:
const id = 999999999999;
const values = []; //datos del form leido
const vieneDeLaBandeja = false; //es para modificar?

const I130 = (props) => {
  const [formData, setFormData] = useState();

  if (vieneDeLaBandeja) {
    readForm(id); //lee formulario de la DB
    setFormData(values);
    console.log("llegó de la bandeja de usuario");
  }

  const handleSubmit = async ({ formData }) => {
    const obj = { data: JSON.stringify(formData), formId: "I130" };

    if (vieneDeLaBandeja) {
      console.log("Handle Submit update:", obj); //actualizar DB
      updateForm(obj);
    } else {
      console.log("Handle Submit create:", obj); //Crear en DB
      createForm(obj);
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
