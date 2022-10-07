import React, { useState } from 'react';
export default function () {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(1);
  return (
    <div>
      <h2>Find out greater of two number</h2>
      <p>
        Number 1 :
        <input
          type="text"
          value={num1}
          onChange={(e) => setNum1(parseInt(e.target.value))}
        />
      </p>
      <p>
        Number 2 :
        <input
          type="text"
          value={num2}
          onChange={(e) => setNum2(parseInt(e.target.value))}
        />
      </p>

      {num1 > num2 ? (
        <h3>
          {num1} is Greater than {num2}
        </h3>
      ) : (
        <h3>
          {num2} is Greater than {num1}
        </h3>
      )}
    </div>
  );
}
