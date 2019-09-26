import * as React from "react";

export const UserContext = React.createContext();
export const DispatchUserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [userCollection, setUserCollection] = React.useState([]);
  return (
    <UserContext.Provider value={userCollection}>
      <DispatchUserContext.Provider value={setUserCollection}>{children}</DispatchUserContext.Provider>
    </UserContext.Provider>
  );
};
