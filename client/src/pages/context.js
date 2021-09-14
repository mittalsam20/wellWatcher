import { useState, useEffect, createContext } from "react";
export const userData = createContext({
  rootUser: {},
  setRootUser: () => {},
});

export const UserProvider = ({ children }) => {
  const [rootUser, setRootUser] = useState({});

  return (
    <>
      <userData.Provider value={{ rootUser, setRootUser }}>
        {children}
      </userData.Provider>
    </>
  );
};
