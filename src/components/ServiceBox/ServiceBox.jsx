import "./style.css";

const ServiceBox = ({ formName, description, servicePrice, onClick }) => (
  <div className="container-box">
    <div className="title" onClick={onClick}>
      <span
        className="d-block text-white"
        style={{
          fontWeight: 600,
          height: "auto",
          backgroundColor: "#7ed6fc",
          margin: 0,
          padding: 10,
          borderRadius: "10px",
          border: "2px solid #3f3434",
        }}
      >
        {formName}
      </span>
    </div>
    <div className="description-text">{description}</div>
    <div
      style={{
        fontWeight: 600,
        height: "auto",
        color: "red",
        margin: 0,
        padding: 10,
      }}
    >
      Service Price : ${servicePrice}
    </div>
  </div>
);

export default ServiceBox;
