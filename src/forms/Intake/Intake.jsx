import { useParams } from "react-router-dom";
import Handler from "../Handler";

const Intake = () => {
  const { id } = useParams();

  return <Handler formName="Intake" clientId={id} />;
};

export default Intake;
