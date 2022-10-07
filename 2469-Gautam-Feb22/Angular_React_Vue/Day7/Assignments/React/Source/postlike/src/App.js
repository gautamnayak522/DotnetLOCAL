import React, { useState } from 'react';
import './App.css';
import './components/postlike.css';
import PostlikeComp from './components/PostlikeComp';

function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState();
  const [listitems, setlistitems] = useState();
  function display(arr) {
    console.log(arr);
    setCount(arr.length);
    setData(arr);
  }
  function print() {
    let list =
      data &&
      data.map((obj) => (
        <tr>
          <td>{obj.title}</td>
          <td>{obj.date}</td>
          <td>{obj.likeon}</td>
        </tr>
      ));
    setlistitems(list);
  }
  return (
    <div>
    <PostlikeComp getdata={display} />
    <p>Parent Component !</p>

    <h2>
      Likes :{' '}
      <a href="#" onClick={print}>
        {count}
      </a>{' '}
    </h2>
    <table className='table w-25'>
      <thead>
        <tr>
          <th>TITLE </th>
          <th>DATE </th>
          <th>Liked On </th>
        </tr>
      </thead>
      <tbody>{listitems}</tbody>
    </table>
  </div>
  );
}

export default App;
