import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import PrintForm from "./PrintForm";
import { CONCE_TYPE } from "../../context/types";
import { BiEdit } from "react-icons/bi";
import { AiFillPlusCircle, AiOutlineDollarCircle } from "react-icons/ai";
import { TiPrinter } from "react-icons/ti";

function RenderForms({ forms }) {
  const history = useHistory();
  return (
    <div>
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
              Formularios del Usuario
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
              <td>
                {el.formStatus === "paid" ? (
                  <span style={{ color: "green" }}> {el.formStatus}</span>
                ) : (
                  <span style={{ color: "red" }}>
                    {`${el.formStatus} `}
                    <AiOutlineDollarCircle
                      style={{ color: "blue", fontSize: 18 }}
                    />

                    <Button
                      style={{
                        textDecoration: "none",
                        background: "none",
                        border: "none",
                        padding: 0,
                        color: "blue",
                      }}
                      onClick={() => {
                        history.push(`/screens/Contact/?idToPay=${el.id}`);
                      }}
                    >
                      Pay
                    </Button>
                  </span>
                )}
              </td>

              <td>{el.createdAt.split("T")[0]}</td>
              <td>
                <BiEdit style={{ fontSize: 18 }} />

                <Link
                  to={`/forms/${el.formId}/${el.id}`}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  Edit
                </Link>
              </td>
              <td>
                <TiPrinter style={{ fontSize: 18 }} />
                <Button
                  style={{
                    textDecoration: "none",
                    background: "none",
                    border: "none",
                    padding: 0,
                    color: "black",
                  }}
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
    </div>
  );
}

export default RenderForms;
