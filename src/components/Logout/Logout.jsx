import { useHistory } from "react-router-dom";
// import { useEffect } from "react";
import { useAppContext } from "../../context/Provider";
import { AUTH_TOKEN, CLIENT_DATA } from "../../constants/storageKeys";

const Logout = () => {
  const {
    state: context,
    updateIntake,
    updateForms,
    // updateConcessionary,
  } = useAppContext();
  const history = useHistory();

  const navigateToWelcome = () => {
    history.push(
      context.concessionary.concessionary
        ? `/${context.concessionary.concessionary}`
        : "/concessionaries/Concessionaries"
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
