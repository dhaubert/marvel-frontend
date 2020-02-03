import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Characters from './pages/Characters';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/character/:characterId" component={Characters} />
      </Switch>
    </BrowserRouter>
  );
}
