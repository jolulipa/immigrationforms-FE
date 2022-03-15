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
  const con = localStorage.getItem(CONCE_TYPE);
  console.log("RenderForms 13");

  return (
    <div>
      <Table striped className="table-hover" style={styles.table}>
        <thead>
          <tr>
            <th colSpan="5" style={styles.trans}>
              <span className="d-flex  justify-content-between">
                Formularios del Usuario
                <Link
                  to="/screens/LandingPage"
                  className="btn-success btn-sm"
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <AiFillPlusCircle /> ADD NEW FORM
                </Link>
              </span>
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
            ? window.location.replace(`/?concessionaryId=${con.id}`)
            : ""}
          {forms.map((el) => (
            <tr key={el.id}>
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
                      style={styles.button1}
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
                  style={styles.button2}
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
const styles = {
  button2: {
    textDecoration: "none",
    background: "none",
    border: "none",
    padding: 0,
    color: "black",
  },
  button1: {
    textDecoration: "none",
    background: "none",
    border: "none",
    padding: 0,
    color: "black",
  },
  table: {
    border: "1px solid lightgrey",
    marginLeft: 0,
    marginTop: 10,
    width: "95%",
  },
  trans: {
    background: "#f56c42",
    color: "white",
    border: "1px solid lightgrey",
  },
};
export default RenderForms;
