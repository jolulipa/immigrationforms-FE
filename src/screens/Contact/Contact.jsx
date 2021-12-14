import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import { readForm, createUpdateForm } from "../../api/formsAccess";
import { CLIENT_DATA } from "../../constants/storageKeys";

const Contact = () => {
  const history = useHistory();
  const url = new URL(window.location.href);
  const [form, setForm] = useState({});
  var idToPay = url.searchParams.get("idToPay");
  const { cliUser, cliEmail } = JSON.parse(localStorage.getItem(CLIENT_DATA));

  const navigateToTray = (idToPay, email, role) => {
    history.push({
      pathname: "/screens/UsersPage",
      state: {
        idToPay,
        email,
        role,
      },
    });
  };

  const handlePayment = async (formR) => {
    if (formR) {
      const paquete = JSON.parse(formR.data);
      paquete.formStatus = "Paid";
      formR.formStatus = "Paid";
      const obj = {
        data: JSON.stringify(paquete),
        formId: formR.formId,
        formStatus: formR.formStatus,
        cliUser: cliUser,
      };
      await createUpdateForm(obj);
      console.log("Pagué el formulario", idToPay);
      navigateToTray(cliUser, cliEmail, formR.role);
    }
  };

  useEffect(() => {
    (async () => {
      let f2 = await readForm(idToPay);
      if (f2) {
        f2.email = cliEmail;
        setForm(f2);
      } else {
        setForm({ formId: "NoData" });
      }

      console.log("Módulo de PAGO", cliEmail, "-", idToPay, "-", form);
    })();
  }, []);

  return (
    <div className="container">
      <h2
        style={{
          padding: 10,
        }}
      >
        Bienvenido a su <strong>MÓDULO DE PAGO</strong>
      </h2>
      <div>
        <p>
          Este es el módulo de pago de la App Immigration Time. facilita a los
          hispanos los trámites migratorios en los Estados Unidos de
          Norteamerica.
        </p>
        <p>
          El estado de pago para el formulario&nbsp;
          {`${form.formId}`} de&nbsp; {`${form.email}`} es&nbsp;
          <span style={{ color: "red" }}>{`${form.formStatus} `}</span>
        </p>
        Favor entre autorización de pago:&nbsp;
        <Button
          style={{
            textDecoration: "none",
            color: "blue",
          }}
          onClick={() => {
            handlePayment(form);
          }}
        >
          Pay
        </Button>
      </div>
    </div>
  );
};

export default Contact;
