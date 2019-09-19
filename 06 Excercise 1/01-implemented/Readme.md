# Challenge 1 - 01-implemented

## Steps

- Copy `00-start` project folder.

- Run `npm install`.

- First, we will create the `lookup-context` to store the data related with the lookups:

_./src/lookup.context.js_

```javascript
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
```

- Now, we need to use `LookupProvider` in our app:

_./src/index.js_

```diff
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './router';
+ import { LookupProvider } from './lookup.context';
import './styles.css';

const App = () => {
  return (
    <div className="app">
+     <LookupProvider>
        <Router />
+     </LookupProvider>
    </div>
  );
};
...

```

- Use it on `page-a`:

_./src/page-a.js_

```diff
import React from 'react';
import { Link } from 'react-router-dom';
- import { fetchUserLookups } from './api';
+ import { LookupContext } from './lookup.context';

export const PageA = () => {
- const [userCollection, setUserCollection] = React.useState([]);
+ const { userCollection, onLoadLookups } = React.useContext(LookupContext);

- const onLoadLookups = React.useCallback(() => {
-   fetchUserLookups().then(users => {
-     setUserCollection(users);
-   });
- }, []);
...

```

- Use it on `page-b`:

_./src/page-b.js_

```diff
import React from 'react';
import { Link } from 'react-router-dom';
- import { fetchUserLookups } from './api';
+ import { LookupContext } from './lookup.context';

export const PageB = () => {
- const [userCollection, setUserCollection] = React.useState([]);
+ const { userCollection, onLoadLookups } = React.useContext(LookupContext);

- const onLoadLookups = React.useCallback(() => {
-   fetchUserLookups().then(users => {
-     setUserCollection(users);
-   });
- }, []);
...
```

- Let's make it lazy:

_./src/lookup.context.js_

```diff
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

```

# About Basefactor + Lemoncode

We are an innovating team of Front End Developers, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
