import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { login } from '../services/authService';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="auth-container">
        <h2>Login</h2>
        <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Login</button>
        <Link to="/register">Register</Link>
      </div >
    </form>
  );
};

render(Login);
