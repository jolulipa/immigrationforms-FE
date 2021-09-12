import { createContext, useContext, useReducer } from "react";
import { EMAIL_TYPE, INTAKE_TYPE } from "./types";

const initialState = {
  email: localStorage.getItem(EMAIL_TYPE) || "",
  intake: localStorage.getItem(INTAKE_TYPE)
    ? JSON.parse(localStorage.getItem(INTAKE_TYPE))
    : {
        firstName: "",
        middleName: "",
        lastName: "",
        fullName: "",
      },
};

const reducer = (state, action) => {
  switch (action.type) {
    case EMAIL_TYPE:
      return { ...state, email: action.payload };
    case INTAKE_TYPE: {
      return {
        ...state,
        intake: {
          ...action.payload,
        },
      };
    }
    default:
      throw new Error("Invalid option passed to reducer");
  }
};

const AppContext = createContext(initialState);

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateEmail = (email) => {
    localStorage.setItem(EMAIL_TYPE, email);
    dispatch({ type: EMAIL_TYPE, payload: email });
  };
  const updateIntake = (intakeObj) => {
    localStorage.setItem(INTAKE_TYPE, JSON.stringify(intakeObj));
    dispatch({ type: INTAKE_TYPE, payload: intakeObj });
  };
  return (
    <AppContext.Provider value={{ state, updateEmail, updateIntake }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
