import React from "react";
import * as api from "./api";
import { UserContext, DispatchUserContext } from "./user.context";

export const useUserCollection = () => {
  const userCollection = React.useContext(UserContext);
  const setUserCollection = React.useContext(DispatchUserContext);

  const lookupUserCollection = React.useCallback(() => {
    if (userCollection && userCollection.length === 0) {
      api.fetchUserLookups().then(userCollection => {
        setUserCollection(userCollection);
      });
    } else {
      console.log("User collection consumed from context");
    }
  }, [userCollection]);

  return { lookupUserCollection, userCollection };
};
