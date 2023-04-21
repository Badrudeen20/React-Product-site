import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
export const FormStoreContext = createContext();

// const formDetail = [
//     {
//        firstname:'',
//        lastname:'',
//        noOfWheel:0,
//        typeOfWheel:'',
//        specificModel:'',
//        dateRange:''
//     }
//  ]

export function FormStoreContextProvider({ children }) {
  //const [info, setInfo] = useLocalStorage("info", {});
  const [info,setInfo] = useState({})
  return (
    <FormStoreContext.Provider value={[info, setInfo]}>
      {children}
    </FormStoreContext.Provider>
  );
}
