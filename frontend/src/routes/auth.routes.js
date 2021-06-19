import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

export default function AuthRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </BrowserRouter>
  );
}
