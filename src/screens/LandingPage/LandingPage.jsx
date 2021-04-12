import React from "react";
import "./styles.css";
import ServiceBox from "../../components/ServiceBox";
import { useHistory } from "react-router-dom";
import data from "../../forms/FormsDB.json";

const LandingPage = () => {
  const history = useHistory();

  const navigate = (formId) => {
    history.push(`/forms/${formId}`);
  };

  const renderData = () =>
    data.map((el) => (
      <div className="col-sm-4">
        <ServiceBox
          key={el.formId}
          formName={el.formName}
          description={el.description}
          onClick={() => navigate(el.formId)}
        />
      </div>
    ));

  return (
    <div className="container">
      SERVICIOS OFRECIDOS POR THE IMMIGRATION TIME:
      <div className="row">{renderData()}</div>
    </div>
  );
};
export default LandingPage;
