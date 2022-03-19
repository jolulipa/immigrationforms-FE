import { useParams } from "react-router-dom";
import Handler from "../Handler";

const I765 = () => {
  const { id } = useParams();

  return <Handler formName="I765" clientId={id} />;
};
export default I765;
