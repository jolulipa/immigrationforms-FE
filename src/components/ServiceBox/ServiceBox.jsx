import "./style.css";

const ServiceBox = ({ formName, description, onClick }) => (
  <div className="container-box">
    <div className="title" onClick={onClick}>
      <span className="title">{formName}</span>
    </div>
    <div className="description-text">{description}</div>
  </div>
);

export default ServiceBox;
