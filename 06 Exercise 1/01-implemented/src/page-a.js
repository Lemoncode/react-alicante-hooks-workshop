import React from 'react';
import { Link } from 'react-router-dom';
import { LookupContext } from './lookup.context';

export const PageA = () => {
  const [userCollection, setUserCollection] = React.useState([]);
  const { fetchUserLookups } = React.useContext(LookupContext);

  const onLoadLookups = () => {
    fetchUserLookups().then(users => {
      setUserCollection(users);
    });
  };

  return (
    <>
      <h1>Page A</h1>
      <ul>
        {userCollection.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
      <button onClick={onLoadLookups}>Load lookups</button>
      <Link className="link-button" to="/page-b">
        Navigate Page B &#8594;
      </Link>
    </>
  );
};
