import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  function logIn(user,password){
    console.log(user,password)
    if(user=="admin" && password=="password")
    localStorage.setItem('username', user);
    else
    alert("Incorrect details")
  }
  function logout() {
    localStorage.removeItem('username');
  }
  return (
    <div>
      <div>
        <p>username : admin, Password : password</p>
        username :
        <input
          type="text"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <br/>
        Password :
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button  onClick={()=>logIn(user,password)}>Login</button>
        <button  onClick={()=>logout()}>logout</button>
        
      </div>

      <nav>
        <Link to="/home">HOME</Link> <br />
        <Link to="/about">ABOUT</Link> <br />
        <Link to="/protected">PROTECTED</Link>
      </nav>

      <Outlet></Outlet>
    </div>
  );
}

export default App;
