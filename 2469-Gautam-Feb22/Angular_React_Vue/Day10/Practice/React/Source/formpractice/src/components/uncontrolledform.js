import React, { useRef } from "react";
export default function UncontrolledForm() {
    
    const name = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('The name you entered was: '+name.current.value)
      }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label>Enter your name:
        <input 
          type="text" 
             ref={name}
        />
      </label>
      <input type="submit" />
    </form>
    </div>
  );
}
