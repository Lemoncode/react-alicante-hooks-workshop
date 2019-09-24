import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { PageA } from './page-a';
import { PageB } from './page-b';

export const Router = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact={true} path={['/', '/page-a']} component={PageA} />
        <Route path='/page-b' component={PageB} />
      </Switch>
    </HashRouter>
  );
};
