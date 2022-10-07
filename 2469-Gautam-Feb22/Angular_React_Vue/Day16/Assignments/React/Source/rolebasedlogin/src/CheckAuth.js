import React from 'react';
import { Navigate } from 'react-router-dom';


export default function CheckAuth({ child,children }) {
    let data = localStorage.getItem('username');
  if (data==='admin' && child === 'admin') {
    return children;
  } else if(data==='user' && child === 'user') {
    return children;
  }
  else{
    return <Navigate to="/" />;
  }
}
