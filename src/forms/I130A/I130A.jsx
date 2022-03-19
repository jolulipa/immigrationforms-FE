import { useParams } from "react-router-dom";
import Handler from "../Handler";

const I130A = () => {
  const { id } = useParams();

  return <Handler formName="I130A" clientId={id} />;
};
export default I130A;
