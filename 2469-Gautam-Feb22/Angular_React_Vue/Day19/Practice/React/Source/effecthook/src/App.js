import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log("Component value render");
  });

  return (
    <div>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>
    Click me
  </button>
  </div>
  );
}

export default App;
