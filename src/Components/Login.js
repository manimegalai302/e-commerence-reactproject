import React, { useState } from 'react';
import {useAuth} from './auth';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const auth=useAuth();
  let navigate = useNavigate();

  const handleLogin = () => {
    auth.login(user);
    navigate('/');
  };

  return (
    <div className='login'>
      <h2>Login your info</h2>
      <input
        type="text"
        placeholder="Username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
