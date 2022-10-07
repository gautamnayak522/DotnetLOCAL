import React from 'react';
import { Navigate } from 'react-router-dom';


export default function CheckAuth({ children }) {
  if (!localStorage.getItem('username')) {
    return <Navigate to="/home" />;
  } else {
    return children;
  }
}
