import React from 'react';
import { Header } from './components';
import { useMediaQuery } from './use-media-query';

export const MyComponent = () => {
  const isTablet = useMediaQuery('(max-width: 1024px)');
  return <Header showMenu={isTablet} />;
};
