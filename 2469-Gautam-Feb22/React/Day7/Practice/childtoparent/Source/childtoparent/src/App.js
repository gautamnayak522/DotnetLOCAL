import React, { useState } from 'react';
import './App.css';
import ProfileComp from './components/ProfileComp';

function App() {
  const [name, setName] = useState();
  function display(data) {
    setName(data);
  }
  return (
    <div>
      <p>App Component !</p>
      <h1>{name}</h1>
      <ProfileComp getdata={display}></ProfileComp>
    </div>
  );
}

export default App;
