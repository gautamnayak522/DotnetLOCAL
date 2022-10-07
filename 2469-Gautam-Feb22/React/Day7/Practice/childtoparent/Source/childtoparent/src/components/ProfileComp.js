import React, { useState } from 'react';
export default function (props) {
  const [name, setName] = useState();
  function demo() {
    props.getdata(name);
  }
  return (
    <div>
      <p>profile Component!</p>
      <p>
        Enter Value to pass Parent Component :
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </p>
      <button onClick={demo}>SUBMIT</button>
      <p>{name}</p>
    </div>
  );
}
