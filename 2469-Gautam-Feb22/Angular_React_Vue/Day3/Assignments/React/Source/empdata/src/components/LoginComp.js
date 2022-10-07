import React, { useState } from "react";
export default function LoginComp() {
  const [uname, setuser] = useState('');
  const [pass, setpass] = useState('');

  function check() {
    if (uname == "" || pass == "") {
      alert("Username and Password Should not be Blank");
    } else if (uname == "admin" && pass == "admin") {
      alert("Valid User");
      setuser("");
      setpass("");
    } else {
      alert("Invalid User");
      setuser("");
      setpass("");
    }
  }
  return (
    <div id="login" className="col-4 d-inline-block vh-100">
      <h6 className="pb-3">
        Create Login Component which validate a user with below credential
        username=admin, password=admin
      </h6>
      <p>
        Enter Username :
        <input type="text" placeholder="UserName" value={uname} onChange={(e) => setuser(e.target.value)} />
      </p>
      <p>
        Enter Password :
        <input type="text" placeholder="Password" value={pass} onChange={(e) => setpass(e.target.value)} />
      </p>
      <button onClick={check} className="btn btn-primary">
        Submit
      </button>
    </div>
  );
}
