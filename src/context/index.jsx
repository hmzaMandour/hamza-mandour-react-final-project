import { createContext, useState } from "react";

export const Mycontext = createContext();

export const Provider = ({ children }) => {
  const [dataUser, setDataUser] = useState([]); 

  return (
    <Mycontext.Provider value={{ dataUser, setDataUser }}>
      {children}
    </Mycontext.Provider>
  );
};