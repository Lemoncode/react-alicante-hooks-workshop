import React from "react";

const useUserCollection = () => {
  const [filter, setFilter] = React.useState("");
  const [userCollection, setUserCollection] = React.useState([]);

  // Load full list when the component gets mounted and filter gets updated
  const loadUsers = () => {
    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
      .then(response => response.json())
      .then(json => setUserCollection(json));
  };

  return { userCollection, loadUsers, filter, setFilter };
};

export const MyComponent = () => {
  const { userCollection, loadUsers, filter, setFilter } = useUserCollection();

  React.useEffect(() => {
    loadUsers();
  }, [filter, loadUsers]);

  return (
    <div>
      <input value={filter} onChange={e => setFilter(e.target.value)} />
      <ul>
        {userCollection.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
