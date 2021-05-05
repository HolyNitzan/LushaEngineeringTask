import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home/ConnectedHome';
import CreateUsers from '../containers/CreateUsers/ConnectedCreateUsers';

const Router: FunctionComponent = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/create">
        <CreateUsers />
      </Route>
    </Switch>
  );
};

export default Router;
