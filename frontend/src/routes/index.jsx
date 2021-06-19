import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';


function Routes() {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if(loading){
    return (
      <h1>Carregando...</h1>
    )
  }
  // return <AppRoutes />;
  return isAuthenticated ? <AppRoutes/> : <AuthRoutes />;
}

export default Routes;
