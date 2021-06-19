import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Users from './pages/Dashboard';
import Register from './pages/Register';


export default function Routes() {
  return (
    <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/register" component={Register} />
    </Switch>
  );
}
