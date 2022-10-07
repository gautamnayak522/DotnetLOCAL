import React, { useState } from "react";
export default function CalcComp() {

  const [num1, setValue] = useState(50);
  const [num2, setValue2] = useState(60);
  const [add,setAdd]=useState();
  const [mul,setMul]=useState();
  const [sub,setSub]=useState();

  function printData(){
    console.log("Addition is : " + (num1+num2));
    
    setAdd("Addition is : " + (num1+num2));
    setMul("Multlipication is : " + (num1*num2));
    setSub("Subrtaction is : " + (num1-num2));
   
  }
  return (
    <div>
      <h3>Create calc component Two text boxes with label. Do the operation addition,multiple and substraction. Use two way binding and event binding.</h3>
      <label htmlFor="fno">Enter First No.</label>
      <input
        type="number"
        value={num1}
        onChange={(e) => setValue(parseInt(e.target.value))}
      />
      <br />
      <br />
      <label htmlFor="sno">Enter Second No.</label>
      <input
        type="number"
        value={num2}
        onChange={(e) => setValue2(parseInt(e.target.value))}
      />
      <br />
      <br />
      <button onClick={printData}>Calculate</button>
      <p>
        Number 1 : {num1}, Number 2 : {num2}
      </p>
      <p>{add}</p>
      <p>{sub}</p>
      <p>{mul}</p>
    </div>
  );
}
