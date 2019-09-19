import React from 'react';

export const useDebounce = (setState, timeout) => {
  const [debouncedSetState, setDebounced] = React.useState(setState);

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounced(setState);
    }, timeout);

    return () => {
      clearTimeout(timerId);
    };
  }, [setState]);

  return debouncedSetState;
};
