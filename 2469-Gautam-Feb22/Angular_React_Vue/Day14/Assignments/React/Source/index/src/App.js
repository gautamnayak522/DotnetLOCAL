import { Outlet } from 'react-router-dom';
import NavBar from './components/navbar';

import './App.css';

function App() {
  return (
    <div>
     
        <NavBar></NavBar>
        <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default App;
