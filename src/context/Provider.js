import {createContext, useContext, useReducer} from 'react';
import {EMAIL_TYPE} from "./types";

const initialState = {
    email: localStorage.getItem(EMAIL_TYPE) || ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case EMAIL_TYPE:
            return {...state, email: action.payload}
        default: throw new Error('Invalid option passed to reducer');
    }
}

const AppContext = createContext(initialState);

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const updateEmail = (email) => {
        localStorage.setItem(EMAIL_TYPE, email);
        dispatch({type: EMAIL_TYPE, payload: email});
    }
    return <AppContext.Provider value={{state, updateEmail}}>
        {children}
    </AppContext.Provider>
}

export default AppContextProvider;
