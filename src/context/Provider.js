import { createContext, useContext, useReducer } from "react";
import { INTAKE_TYPE, FORMS_TYPE, CONCE_TYPE } from "./types";

const initialState = {
  forms:
    localStorage.getItem(FORMS_TYPE) !== "undefined"
      ? JSON.parse(localStorage.getItem(FORMS_TYPE))
      : [],
  intake: localStorage.getItem(INTAKE_TYPE)
    ? JSON.parse(localStorage.getItem(INTAKE_TYPE))
    : {
        firstName: "",
        middleName: "",
        lastName: "",
        fullName: "",
      },
  concessionary:
    localStorage.getItem(CONCE_TYPE) !== "undefined"
      ? JSON.parse(localStorage.getItem(CONCE_TYPE))
      : "",
};
const AppContext = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case FORMS_TYPE:
      return { ...state, forms: action.payload };
    case CONCE_TYPE:
      return { ...state, concessionary: action.payload };
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

//Eliaquin EL ERROR ESTA AQUI:
const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const updateForms = (forms) => {
    localStorage.setItem(FORMS_TYPE, JSON.stringify(forms));
    dispatch({ type: FORMS_TYPE, payload: forms });
  };
  const updateIntake = (intakeObj) => {
    localStorage.setItem(INTAKE_TYPE, JSON.stringify(intakeObj));
    dispatch({ type: INTAKE_TYPE, payload: intakeObj });
  };
  const updateConcessionary = (conceObj) => {
    localStorage.setItem(CONCE_TYPE, JSON.stringify(conceObj));
    dispatch({ type: CONCE_TYPE, payload: conceObj });
  };
  return (
    <AppContext.Provider
      value={{ state, updateIntake, updateForms, updateConcessionary }}
    >
      {children}
    </AppContext.Provider>
  );
};
export { AppContextProvider as default, useAppContext };
