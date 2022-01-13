import { useHistory } from "react-router-dom";
import data from "../../forms/FormsDB.json";
import ServiceBox from "../../components/ServiceBox";

const LandingPage = () => {
  const history = useHistory();

  const navigate = (formId) => {
    history.push(`/forms/${formId}`);
  };

  const renderData = () =>
    data.map((el) => (
      <div
        key={el.formId}
        className="col-sm-4"
        style={{
          color: "gray",
          textShadow: "0 0 1px black",
        }}
      >
        <ServiceBox
          key={el.formId}
          formName={el.formName}
          description={el.description}
          onClick={() => navigate(el.formId)}
        />
      </div>
    ));

  return (
    <div
      className="container-fluid"
      style={{
        padding: 10,
        overflow: "auto",
      }}
    >
      <h5
        style={{
          padding: "1rem",
          fontWeight: 500,
          textShadow: "0 0 .5px white",
          color: "black",
        }}
      >
        SERVICIOS OFRECIDOS POR THE IMMIGRATION TIME:
      </h5>
      <div className="row">{renderData()}</div>
    </div>
  );
};
export default LandingPage;
