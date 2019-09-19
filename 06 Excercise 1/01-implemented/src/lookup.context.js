import React from 'react';
import { fetchUserLookups } from './api';

export const LookupContext = React.createContext({
  userCollection: [],
  onLoadLookups: () =>
    console.warn('You need to use LookupProvider in your app'),
});

export const LookupProvider = props => {
  const [userCollection, setUserCollection] = React.useState([]);

  const onLoadLookups = React.useCallback(() => {
    fetchUserLookups().then(users => {
      setUserCollection(users);
    });
  }, []);

  return (
    <LookupContext.Provider
      value={{
        userCollection,
        onLoadLookups,
      }}
    >
      {props.children}
    </LookupContext.Provider>
  );
};
