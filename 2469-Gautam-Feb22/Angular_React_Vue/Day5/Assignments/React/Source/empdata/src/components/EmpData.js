import React, { useState } from "react";
import "./empdata.css";
export default function EmpData() {
  const [eid, seteid] = useState("");
  const [ename, setename] = useState("");
  const [eaddr, seteaddr] = useState("");
  const [gender, setgender] = useState("");
  const [doj, setdoj] = useState("");
  const [hobbies, sethobbies] = useState("");
  const [values] = useState([]);
  const [listitems, setlistitems] = useState();
  const [currentmonth, setcurrmonth] = useState();
  const [empmonth, setempmonth] = useState();

  function assign() {
    let datas = { eid, ename, eaddr, gender, doj, hobbies };
    values.push(datas);
    console.log(datas);
    console.log(values);

    values.sort((a, b) => (a.ename < b.ename ? -1 : 1));
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1;
    setcurrmonth(month);
    var e = doj.slice(6, 7);
    setempmonth(e);

    let list =
      values &&
      values.map((obj) => (
        <tr>
          <td>{obj.eid}</td>
          <td>{obj.ename}</td>
          <td>{obj.eaddr}</td>
          <td>{obj.gender}</td>
          <td>{obj.doj}</td>
          <td>{obj.hobbies}</td>
        </tr>
      ));

    setlistitems(list);
  }

  return (
    <div>
      <h3>
        Create a Employee Form which contains EmployeeID,Name,Address, Gender,
        DOJ, Hobbies and on button click it should be stored it in Employee
        Array. Iterate that list in tabular format. Filter the list who has
        joined in the current month. and sort the list based on Name.
      </h3>
      <form className="frm w-50">
        <strong>EMP ID : </strong>
        <input
          type="text"
          name="eid"
          className="form-control"
          onChange={(e) => seteid(e.target.value)}
        />
        <br />
        <strong>EMP Name :</strong>
        <input
          type="text"
          name="ename"
          className="form-control"
          onChange={(e) => setename(e.target.value)}
        />
        <br />
        <strong>Address :</strong>
        <input
          type="text"
          name="eaddr"
          className="form-control"
          onChange={(e) => seteaddr(e.target.value)}
        />
        <br />
        <strong>Gender : </strong>
        <input
          name="gender"
          type="radio"
          value="male"
          className="form-check-input"
          onChange={(e) => setgender(e.target.value)}
        />
        Male
        <input
          name="gender"
          type="radio"
          value="female"
          className="form-check-input"
          onChange={(e) => setgender(e.target.value)}
        />
        Female <br />
        <br />
        <strong>DOJ :</strong>
        <input
          type="date"
          name="doj"
          className="form-control"
          onChange={(e) => setdoj(e.target.value)}
        />
        <br />
        <strong>Hobbies :</strong>
        <input
          type="text"
          name="hobbies"
          className="form-control"
          onChange={(e) => sethobbies(e.target.value)}
        />
        <br />
        <input
          type="button"
          onClick={assign}
          value="Submit"
          className="btn btn-primary"
        />
      </form>
      {eid},{ename},{eaddr},{gender},{doj},{hobbies},{currentmonth},{empmonth}
      <p>
        SORTED LIST OF EMPLOYEE BASED ON NAME, WHO HAS JOINED IN CURRENT MONTH
      </p>
      <p className="green">*Joined in this month</p>
      <p className="red">*Not Joined in this month</p>
      <table className="table pt-5 w-25">
        <caption>LIST OF EMPLOYEE</caption>
        <thead>
          <tr>
            <th>EID</th>
            <th>ENAME</th>
            <th>ADDRESS</th>
            <th>GENDER</th>
            <th>DOJ</th>
            <th>HOBBIES</th>
          </tr>
        </thead>
        {currentmonth == empmonth ? (
          <tbody className="green">{listitems}</tbody>
        ) : (
          <tbody className="red">{listitems}</tbody>
        )}
      </table>
    </div>
  );
}
