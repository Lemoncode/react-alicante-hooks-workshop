# Challenge 3 - 01-implemented

## Steps

- Copy `00-start` project folder.

- Run `npm install`.

- Create `useMediaQuery` hook:

_./src/use-media-query.js_

```javascript
import React from 'react';

export const useMediaQuery = mediaQuery => {
  const [matches, setMatches] = React.useState(window.matchMedia(mediaQuery));

  React.useEffect(() => {
    const listener = event => setMatches(event.matches);
    window.matchMedia(mediaQuery).addListener(listener);

    return () => {
      window.matchMedia(mediaQuery).removeListener(listener);
    };
  }, [mediaQuery]);

  return matches;
};

```

- Use it:

_./src/demo.js_

```diff
import React from 'react';
import { Header } from './components';
+ import { useMediaQuery } from './use-media-query';

export const MyComponent = () => {
+ const isTablet = useMediaQuery('(max-width: 1024px)');
- return <Header showMenu={true} />;
+ return <Header showMenu={isTablet} />;
};

```

# About Basefactor + Lemoncode

We are an innovating team of Front End Developers, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
