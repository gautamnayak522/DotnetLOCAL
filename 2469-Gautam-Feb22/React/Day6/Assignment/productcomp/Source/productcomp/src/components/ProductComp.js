import React from 'react';
import ProductlistComp from './ProductlistComp';
export default function ProductComp() {
    var product = [
        { pname: "Mobile", price: "10000", qty: "5" },
        { pname: "laptop", price: "25000", qty: "10" },
        { pname: "Charger", price: "500", qty: "15" },
        { pname: "Bag", price: "350", qty: "20" },
      ];

      let list=product.map((obj)=>
        <tr>
        <td>{obj.pname}</td>
        <td>{obj.price}</td>
        <td>{obj.qty}</td>
        <td>{discount(obj.price)}</td>
        </tr>
      );
      function discount(a) {
        return a - (a * 5) / 100;
      }

  return (
    <div>
      <p>Product component started!!!</p>
      
      <table className="table border-2 w-50">
      <tr>
        <th>ProductName</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Payable Amount</th>
      </tr>
    <tbody>   
    {list}
    </tbody>
    </table>
    <ProductlistComp list={product}/>
    </div>
    
  );
}
