import React from "react";
import * as api from "./api";
import { UserContext } from "./user.context";

export const useUserCollection = () => {
  const { userCollection, setUserCollection } = React.useContext(UserContext);

  const lookupUserCollection = React.useCallback(() => {
    return userCollection && userCollection.length > 0
      ? Promise.resolve(userCollection).then(userCollection => {
          console.log("User collection consumed from context");
          return userCollection;
        })
      : api.fetchUserLookups().then(userCollection => {
          setUserCollection(userCollection);
          return userCollection;
        });
  }, [userCollection]);

  return { lookupUserCollection };
};
