import React from "react";
import { Link } from "react-router-dom";
import { useUserCollection } from "./user.hooks";

export const PageA = () => {
  const { lookupUserCollection, userCollection } = useUserCollection();

  return (
    <>
      <h1>Page A</h1>
      <ul>
        {userCollection.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
      <button onClick={lookupUserCollection}>Load lookups</button>
      <Link className="link-button" to="/page-b">
        Navigate Page B &#8594;
      </Link>
    </>
  );
};
