import './App.css';
import { Link, Outlet } from "react-router-dom";
import * as React from "react";


function App() {
  return (
    <div>
      <h1>ROUTING APP</h1>
      <nav >
        <Link to="/home">HOME</Link>  <br/>
        <Link to="/about">ABOUT</Link>
      </nav>

      <Outlet></Outlet>
   
    </div>
  );
}

export default App;
