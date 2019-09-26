import React from "react";
import * as api from "./api";

export const LookupContext = React.createContext({
  fetchUserLookups: () => console.warn("You need to use LookupProvider in your app"),
});

export const LookupProvider = props => {
  const [userCollection, setUserCollection] = React.useState([]);

  const fetchUserLookups = React.useCallback(() => {
    return userCollection.length > 0
      ? Promise.resolve(userCollection).then(users => {
          console.log("User lookups fetched from cache");
          return users;
        })
      : api.fetchUserLookups().then(users => {
          setUserCollection(users);
          return users;
        });
  }, [userCollection]);

  return (
    <LookupContext.Provider
      value={{
        fetchUserLookups,
      }}
    >
      {props.children}
    </LookupContext.Provider>
  );
};
