import { useHistory } from "react-router-dom";
import data from "../../forms/FormsDB.json";
import ServiceBox from "../../components/ServiceBox";

const LandingPage = () => {
  const history = useHistory();
  console.log("LandingPage 7");

  const navigate = (formId) => {
    history.push(`/forms/${formId}`);
  };

  const renderData = () =>
    data.map((el) => (
      <div key={el.formId} className="col-sm-4" style={styles.map}>
        <ServiceBox
          key={el.formId}
          formName={el.formName}
          description={el.description}
          servicePrice={el.servicePrice}
          onClick={() => navigate(el.formId)}
        />
      </div>
    ));

  return (
    <div className="container-fluid" style={styles.cont}>
      <h5 style={styles.title}>
        SERVICIOS OFRECIDOS POR THE IMMIGRATION TIME:
      </h5>
      <div className="row">{renderData()}</div>
    </div>
  );
};
const styles = {
  title: {
    padding: "1rem",
    fontWeight: 500,
    textShadow: "0 0 .5px white",
    color: "black",
  },
  cont: {
    padding: 10,
    overflow: "auto",
  },
  map: {
    color: "gray",
    textShadow: "0 0 1px black",
  },
};
export default LandingPage;
