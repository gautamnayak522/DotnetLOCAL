import React, { useState } from 'react';
export default function RectComp() {
  const [num1, setValue] = useState(50);
  const [num2, setValue2] = useState(60);
  const [result, res] = useState();
  function area() {
    res('Area of Rectangle is : ' + num1 * num2);
  }
  return (
    <div id="rect" className="col-4 d-inline-block vh-100">
      <h6 className="pb-3">
        Create a Rectangle Component which computes area of Rectangle.
      </h6>
      <p>
        Enter Height :
        <input
          type="number"
          value={num1}
          onChange={(e) => setValue(parseInt(e.target.value))}
        />
      </p>
      <p>
        Enter Width :
        <input
          type="number"
          value={num2}
          onChange={(e) => setValue2(parseInt(e.target.value))}
        />
      </p>
      <button onClick={area} className="btn btn-primary">
        Calculate
      </button>
      <p>
        Number 1 : {num1}, Number 2 : {num2}
      </p>
      <p className="text-success">{result}</p>
    </div>
  );
}
