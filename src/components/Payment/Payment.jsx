import React, { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { readForm, createUpdateForm } from "../../api/formsAccess";
import { CLIENT_DATA } from "../../constants/storageKeys";

const Payment = () => {
  return (
    <>
      <h2>
        Bienvenido a su <strong>MÓDULO DE PAGO</strong>
      </h2>
      <div>
        <p>
          Este es el módulo de pago de la App Immigration Time. facilita a los
          hispanos los trámites migratorios en los Estados Unidos de
          Norteamerica.
          <span>Su estado de pago para el formulario:</span>
          {/* {form.formId}
          <span style={{ color: "red" }}>{`${form.formStatus} `}</span> */}
          Favor entre autorización de pago debajo.
        </p>
      </div>
    </>
  );
};

export default Payment;
