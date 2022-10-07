import React,{useState} from 'react';
import './App.css';
import DisplayComp from './components/DisplayComp'

function App() {
  
  const [uname,setuser]=useState('');
 
  return (
    <div>
    <h3>
      Create one input field name in app component. Create a display component
      and call that component in app component. value entered in name field
      should be displayed in displayed component message should be like Welcome
      Nameoftheperson.(Parent to a child value transfer).
    </h3>

    <p>Enter UserName : <input type="text" value={uname} onChange={(e)=>setuser(e.target.value)} /></p>
    UserName {uname} passing to Child component..
    <DisplayComp user={uname}></DisplayComp>
  </div>
  );
}

export default App;
