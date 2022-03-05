import { useHistory } from "react-router-dom";
import { useAppContext } from "../../context/Provider";
import { AUTH_TOKEN, CLIENT_DATA } from "../../constants/storageKeys";

const Logout = (concessionary) => {
  const { updateForms } = useAppContext();
  const { updateIntake } = useAppContext();
  const history = useHistory();

  const navigateToWelcome = () => {
    history.push(
      concessionary ? `/${concessionary}` : "/concessionaries/Concessionaries"
    );
  };

  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(CLIENT_DATA);
  updateIntake("");
  updateForms("");
  console.log("Local Storage Was Reset because of logout");
  alert(`You have logged out of the system`);
  navigateToWelcome();
  return <>TEST</>;
};
export default Logout;
