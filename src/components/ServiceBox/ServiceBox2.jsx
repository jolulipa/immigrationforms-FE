import "./style.css";

const ServiceBox2 = ({ id, formId, userId, createdAt, updatedAt, onClick }) => (
  <div className="container-box">
    <div className="title" onClick={onClick}>
      <span className="badge badge-info"> {formId}</span>
    </div>
    <div>{id}</div>
    <div>{userId}</div>
    <div>{createdAt}</div>
    <div>{updatedAt}</div>
  </div>
);

export default ServiceBox2;
