import React from "react";
import { useHistory } from "react-router-dom";
import { Table, Button } from "react-bootstrap";
import PrintForm from "./PrintForm";

function RenderForms(forms) {
  console.log("PROP RECIBIDO", forms);
  return <div>{forms}</div>;
  // return forms.map((el) => <div>{el}</div>);

  // const history = useHistory();

  // const navigateToForm = (id, formId) => {
  //   history.push(`/forms/${formId}/${id}`);
  // };

  //   const renderTable = () => (
  //     <Table striped className="table-hover">
  //       <thead>
  //         <tr key={"header"}>
  //           <th>User -------------- Phone</th>
  //           <th>Form Status</th>
  //           <th>Form Name</th>
  //           <th>Created on:</th>
  //           <th>Modified on:</th>
  //           <th>EDIT Form</th>
  //           <th>PRINT Form</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {forms.map((el) => (
  //           <tr key={el.id}>
  //             <td>{JSON.parse(el.data).email}</td>
  //             <td>{el.formStatus}</td>
  //             <td>{el.formId}</td>
  //             <td>{el.createdAt.split("T")[0]}</td>
  //             <td>{el.updatedAt.split("T")[0]}</td>
  //             <td>
  //               <Button
  //                 className="btn-Primary btn-sm"
  //                 onClick={() => {
  //                   navigateToForm(el.id, el.formId);
  //                 }}
  //               >
  //                 Select
  //               </Button>
  //             </td>
  //             <td>
  //               <Button
  //                 className="btn-success btn-sm"
  //                 onClick={async () => {
  //                   await PrintForm(el.id);
  //                 }}
  //               >
  //                 Print
  //               </Button>
  //             </td>
  //           </tr>
  //         ))}
  //       </tbody>
  //     </Table>
  //   );
  //   return <div>{renderTable}</div>;
}

export default RenderForms;
