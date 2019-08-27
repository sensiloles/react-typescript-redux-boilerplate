import React from 'react';
import { Route, Switch } from 'react-router';
import Counter from '../containers/Counter';

const routes = (
  <div>
    <Switch>
      <Route
        exact
        path="/"
        render={() => (
          <div className="home-page">
            <p>Главная страница</p>
          </div>
        )}
      />
      <Route path="/counter" component={Counter} />
    </Switch>
  </div>
);

export default routes;
