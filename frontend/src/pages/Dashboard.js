import React, { useState, useEffect, useContext } from 'react';
import { useHistory }  from 'react-router-dom';


import api from '../services/auth';
import { AuthContext } from '../contexts/AuthContext';

export default function Users() {
  const { SignOut, user } = useContext(AuthContext);
  const [data, setData] = useState('');
  const history = useHistory();

  function handleSignOut() {
    SignOut();
    history.push('/login');
  }

  useEffect(() => {
    const response = api.get('/').then((response) => {
      setData(response.data);
    });
  }, []);
  return (
    <div>
      <h1>{JSON.stringify(data)}</h1>
      <button onClick={handleSignOut}>Logout</button>
    </div>

    // <>
    //   <ul>
    //     {users.map((user) => (
    //       <li key={user.id}>{user.name} ({user.website})</li>
    //     ))}
    //   </ul>

    //   <button type="button" onClick={handleLogout} >Sair</button>
    // </>
  );
}
