import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import PrintForm from "./PrintForm";
import { CONCE_TYPE } from "../../context/types";
import { AiFillPlusCircle } from "react-icons/ai";

function RenderForms({ forms }) {
  return (
    <Table
      striped
      className="table-hover"
      style={{
        border: "1px solid lightgrey",
        marginLeft: 15,
        width: "95%",
      }}
    >
      <thead>
        <tr>
          <th
            colspan="6"
            style={{
              background: "#ff0066",
              color: "white",
              border: "1px solid lightgrey",
            }}
          >
            Foumularios del Usuario
            <Link
              to="/screens/LandingPage"
              className="btn-success btn-sm"
              style={{
                textDecoration: "none",
                marginLeft: "65%",
                alignContent: "right",
              }}
            >
              <AiFillPlusCircle /> ADD NEW FORM
            </Link>
          </th>
        </tr>
        <tr key={"header"}>
          <th>Form</th>
          <th>Status</th>
          <th>Created on:</th>
          <th>Modified on:</th>
          <th>EDIT Form</th>
          <th>PRINT Form</th>
        </tr>
      </thead>
      <tbody>
        {!forms || forms === ""
          ? window.location.replace(
              `/?concessionaryId=${localStorage.getItem(CONCE_TYPE)}`
            )
          : console.log("Displayed Forms:", forms)}
        {forms.map((el) => (
          <tr key={el.id}>
            {/* <td>{JSON.parse(el.data).p1.email}</td> */}
            <td>{el.formId}</td>
            <td>{el.formStatus}</td>
            <td>{el.createdAt.split("T")[0]}</td>
            <td>{el.updatedAt.split("T")[0]}</td>
            <td>
              {
                <Link
                  to={`/forms/${el.formId}/:${el.id}`}
                  className="btn-primary btn-sm"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  select
                </Link>
              }
            </td>
            <td>
              <Button
                className="btn-success btn-sm"
                onClick={async () => {
                  console.log(el.id);
                  await PrintForm(el.id);
                }}
              >
                Print
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default RenderForms;
