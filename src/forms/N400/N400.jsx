import { useParams } from "react-router-dom";
import Handler from "../Handler";

const N400 = () => {
  const { id } = useParams();

  return <Handler formName="N400" clientId={id} />;
};

export default N400;
