import { Link, Outlet } from 'react-router-dom';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  function logIn(user, password) {
    console.log(user, password);
    if ((user === 'admin' || user === 'user') && password === 'password')
      localStorage.setItem('username', user);
    else alert('Incorrect details');
  }

  return (
    <div>
      <div>
        <p>username : admin, Password : password</p>
        <p>username : user, Password : password</p>
        
        username :
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        Password :
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => logIn(user, password)}>Login</button>
        
      </div>

      <nav>
        <Link to="/user">User</Link> <br />
        <Link to="/admin">Admin</Link> <br />
      </nav>

      <Outlet></Outlet>
    </div>
  );
}

export default App;
