import React from 'react';
export default function Admin() {
    function logout() {
        localStorage.removeItem('username');
      }
  return (
    <div>
      <h1>Admin</h1>
      <button onClick={() => logout()}>logout</button>
    </div>
  );
}
