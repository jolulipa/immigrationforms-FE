import { createContext, useContext, useReducer } from "react";
import { INTAKE_TYPE, FORMS_TYPE } from "./types";

const initialState = {
  forms: localStorage.getItem(FORMS_TYPE) || [],
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
    case FORMS_TYPE:
      return { ...state, forms: action.payload };
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
  const updateForms = (forms) => {
    localStorage.setItem(FORMS_TYPE, forms);
    dispatch({ type: FORMS_TYPE, payload: forms });
  };
  const updateIntake = (intakeObj) => {
    localStorage.setItem(INTAKE_TYPE, JSON.stringify(intakeObj));
    dispatch({ type: INTAKE_TYPE, payload: intakeObj });
  };
  return (
    <AppContext.Provider value={{ state, updateIntake, updateForms }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
