import { useParams } from "react-router-dom";
import Handler from "../Handler";

const Concessionary = () => {
  const { id } = useParams();

  return <Handler formName="Concessionary" clientId={id} />;
};

export default Concessionary;
