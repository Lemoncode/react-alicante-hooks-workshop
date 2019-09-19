export const fetchUserLookups = () =>
  fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(data => data);
