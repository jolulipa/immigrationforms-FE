import { useParams } from "react-router-dom";
import Handler from "../Handler";

const I485 = () => {
  const { id } = useParams();

  return <Handler formName="I485" clientId={id} />;
};
export default I485;
