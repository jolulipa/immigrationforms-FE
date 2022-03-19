import { useParams } from "react-router-dom";
import Handler from "../Handler";

const I130 = () => {
  const { id } = useParams();

  return <Handler formName="I130" clientId={id} />;
};

export default I130;
