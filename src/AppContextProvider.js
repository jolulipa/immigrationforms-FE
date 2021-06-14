import {createContext, useContext, useState, useEffect} from 'react';
import {APP_STORE_NAME} from "./constants/storageKeys";

const initialValues = {};

const AppContext = createContext(initialValues);
const UpdateAppContext = createContext(() => {});

export const useAppContext = () => useContext(AppContext);
export const useUpdateAppContext = () => useContext(UpdateAppContext);

const AppContextProvider = ({children}) => {
    const [values, setValues] = useState(initialValues);

    const updateValues = (newValues) => {
        const newObj = {...values, ...newValues};
        setValues(newObj);
    }

    useEffect(() => {
        if(Object.keys(values).length === 0) return;
        localStorage.setItem(APP_STORE_NAME, JSON.stringify(values));
    }, [values]);

    useEffect(() => {
        const item = localStorage.getItem(APP_STORE_NAME);
        if (item) {
            setValues(JSON.parse(item));
        }
    }, []);

    return <AppContext.Provider value={values}>
        <UpdateAppContext.Provider value={updateValues}>
            {children}
        </UpdateAppContext.Provider>
    </AppContext.Provider>
}

export default AppContextProvider;

