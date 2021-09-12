import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import PrintForm from "./PrintForm";

const RenderTable = () => {
  const history = useHistory();

  function decriptData(el) {
    const elData = JSON.parse(el.data);
    const elP1 = elData.p1;
    const elMail = elP1.email;
    const elPhone = elP1.phone;
    const todo = [elMail, "-", elPhone];
    return todo;
  }

  const navigateToForm = (id, formId) => {
    history.push(`/forms/${formId}/${id}`);
  };

  const renderResults = (results) =>
    results.map((el) => (
      <tr key={el.id}>
        <td>{decriptData(el)}</td>
        <td>{el.formStatus}</td>
        <td>{el.formId}</td>
        <td>{el.createdAt.split("T")[0]}</td>
        <td>{el.updatedAt.split("T")[0]}</td>
        <td>
          <Button
            className="btn-Primary btn-sm"
            onClick={() => {
              navigateToForm(el.id, el.formId);
            }}
          >
            Select
          </Button>
        </td>
        <td>
          <PrintForm />
        </td>
      </tr>
    ));

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>User -------------- Phone</th>
          <th>Form Status</th>
          <th>Form Name</th>
          <th>Created on</th>
          <th>Modified on</th>
          <th>EDIT Form</th>
          <th>PRINT Form</th>
        </tr>
      </thead>
      <tbody>{renderResults()}</tbody>
    </table>
  );
};

export default RenderTable;
