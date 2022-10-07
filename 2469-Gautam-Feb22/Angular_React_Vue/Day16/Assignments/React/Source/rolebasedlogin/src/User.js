import React from 'react';
export default function User() {
    function logout() {
        localStorage.removeItem('username');
      }
  return (
    <div>
      <h1>User</h1>
      <button onClick={() => logout()}>logout</button>
    </div>
  );
}
