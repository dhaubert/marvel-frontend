import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Characters from './pages/Characters';
import Comics from './pages/Comics';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/characters"  component={Characters} />
        <Route path="/comics"  component={Comics} />
      </Switch>
    </BrowserRouter>
  );
}
