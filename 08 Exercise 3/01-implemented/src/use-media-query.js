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
