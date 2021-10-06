import React from "react";
import { Link } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import PrintForm from "./PrintForm";
import { CONCE_TYPE } from "../../context/types";

function RenderForms({ forms }) {
  return (
    <Table striped className="table-hover">
      <thead>
        <tr key={"header"}>
          {/* <th>User -------------- Phone</th> */}
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
          ? window.location.replace(`/${localStorage.getItem(CONCE_TYPE)}`)
          : console.log("forms:", forms)}
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
                  to={`/forms/${el.formId}/${el.id}`}
                  className="badge badge-pill badge-primary"
                >
                  select
                </Link>
              }
            </td>
            <td>
              <Button
                className="btn-success btn-sm"
                onClick={async () => {
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
