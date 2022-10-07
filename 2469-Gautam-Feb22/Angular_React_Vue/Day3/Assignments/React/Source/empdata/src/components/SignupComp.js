import React, { useState } from 'react';
export default function SignupComp() {
  const [name, setname] = useState();
  const [address, setadd] = useState();
  const [pan, setpan] = useState();
  return (
    <div id="signup" className="col-4 d-inline-block vh-100">
    <h6 className="pb-3">
      Create a signup component which contains field like Name, Address,
      PanNumber and interpolate these information in the paragraph
    </h6>
    <p>Enter Name : <input type="text" placeholder="Name" value={name} onChange={(e)=>setname(e.target.value)} /></p>
    <p>
      Enter Address :
      <input type="text" placeholder="Address" value={address} onChange={(e)=>setadd(e.target.value)} />
    </p>
    <p>
      Enter PAN No :
      <input type="number" placeholder="PAN NO" value={pan} onChange={(e)=>setpan(e.target.value)} />
    </p>
    <p className="text-primary">{ name } { address } { pan }</p>
  </div>
  );
}
