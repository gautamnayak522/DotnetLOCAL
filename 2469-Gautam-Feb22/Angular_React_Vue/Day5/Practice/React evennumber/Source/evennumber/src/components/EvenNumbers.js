import React from 'react';
export default function () {
      let Numberlist = [0,1,2,3,4,5,6,8,10]
  
     const listitems = Numberlist.map((listitem)=>(
      <ul>
         {listitem%2==0 && <li>{listitem}</li>}
       </ul>
    ));
      return (
        <div>
          <h2>Print even number between 1 and 10</h2>
          {listitems}
        </div>
      );

    }
  