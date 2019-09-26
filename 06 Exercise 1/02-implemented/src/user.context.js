import * as React from "react";

export const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [userCollection, setUserCollection] = React.useState([]);
  return <UserContext.Provider value={{ userCollection, setUserCollection }}>{children}</UserContext.Provider>;
};
