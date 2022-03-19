import { useParams } from "react-router-dom";
import Handler from "../Handler";

const I90 = () => {
  const { id } = useParams();
  console.log("Form I90 Page");

  return <Handler formName="I90" clientId={id} />;
};

export default I90;
