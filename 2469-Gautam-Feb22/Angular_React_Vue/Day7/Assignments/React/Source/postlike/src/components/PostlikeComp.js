import React, { useState } from 'react';
import img from '../redixlogo.png';
export default function (props) {
  let title = 'Radix';
  let desc =
    'Radixweb is a globally acclaimed IT consulting and offshore software development leader.';
  let date = new Date().toLocaleDateString();
  const [likelist, setList] = useState([]);

  function display() {
    let likeon = new Date().toLocaleString();
    let datas = { title: title, date: date,likeon:likeon };
    console.log(datas);
    setList((l) => [...l, datas]);
    console.log(likelist);
    props.getdata(likelist);
  }
  return (
    <div>
      <p>child Component !</p>
      <div className="card">
        <img src={img}  alt="logo" width="100%" height="150px"/>
        <h1>{title}</h1>
        <p className="title">{desc}</p>
        <p>{date}</p>
        <p>
          <button onClick={display}>Like</button>
        </p>
      </div>
    </div>
  );
}
