import React from 'react';
export default function ProductlistComp(props) {
    let items=props.list.map((obj)=>
        <li>{obj.pname}</li> 
      );
  return (
    <div>
      <p>Productlist component started!!!</p>
        <ul>
            {items}
        </ul>
    </div>
  );
}
