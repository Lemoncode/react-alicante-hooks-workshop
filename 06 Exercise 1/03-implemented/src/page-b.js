import React from "react";
import { Link } from "react-router-dom";
import { useUserCollection } from "./user.hooks";

export const PageB = () => {
  const { lookupUserCollection, userCollection } = useUserCollection();

  return (
    <>
      <h1>Page B</h1>
      <ul>
        {userCollection.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
      <button onClick={lookupUserCollection}>Load lookups</button>
      <Link className="link-button" to="/page-a">
        &#8592; Navigate Page A
      </Link>
    </>
  );
};
