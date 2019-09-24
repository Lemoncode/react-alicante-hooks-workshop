# Challenge 2 - 01-implemented

## Steps

- Copy `00-start` project folder.

- Run `npm install`.

- First, we will create the `useDebounce` hook. The goal is getting a debounced `filter` value:

_./src/use-debounce.js_

```javascript
import React from 'react';

export const useDebounce = (value, timeout) => {
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value);
    }, timeout);
    return () => {
      clearTimeout(timerId);
    };
  }, [value, timeout]);

  return debouncedValue;
};

```

> NOTE: It's important the `clearTimeout` due to we want to remove old filter values, we only want the last one.

- Update the component:

_./src/demo.js_

```diff
import React from "react";

const useUserCollection = () => {
  const [filter, setFilter] = React.useState("");
  const [userCollection, setUserCollection] = React.useState([]);

  // Load full list when the component gets mounted and filter gets updated
- const loadUsers = () => {
+ const loadUsers = userName => {
-   fetch(`https://jsonplaceholder.typicode.com/users?name_like=${filter}`)
+   fetch(`https://jsonplaceholder.typicode.com/users?name_like=${userName}`)
      .then(response => response.json())
      .then(json => setUserCollection(json));
  };

  return { userCollection, loadUsers, filter, setFilter };
};

export const MyComponent = () => {
  const { userCollection, loadUsers, filter, setFilter } = useUserCollection();
+ const debouncedFilter = useDebounce(filter, 500);

- React.useEffect(() => {
-   loadUsers();
- }, [filter]);
+ React.useEffect(() => {
+   if (debouncedFilter) {
+     loadUsers(debouncedFilter);
+   } else {
+     loadUsers(filter);
+   }
+ }, [debouncedFilter]);
...
```

# About Basefactor + Lemoncode

We are an innovating team of Front End Developers, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
