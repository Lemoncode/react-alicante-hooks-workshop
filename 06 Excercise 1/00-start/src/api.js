export const fetchUserLookups = () =>
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(data => {
      console.log('User lookups fetched from server');
      console.log({ data });
      return data;
    });
