import { AUTH_TOKEN, CLIENT_DATA } from "../../constants/storageKeys";

const Logout = (concessionary, updateIntake, updateForms) => {
  const navigateToWelcome = () => {
    if (concessionary) {
      console.log(concessionary);
      window.location.replace(`${concessionary}`);
    } else {
      window.location.replace("/concessionaries/Concessionaries");
    }
  };

  localStorage.removeItem(AUTH_TOKEN);
  localStorage.removeItem(CLIENT_DATA);
  updateIntake("");
  updateForms("");
  console.log("Local Storage Was Reset because of logout");
  alert(`You have logged out of the system`);
  navigateToWelcome();
};
export default Logout;
