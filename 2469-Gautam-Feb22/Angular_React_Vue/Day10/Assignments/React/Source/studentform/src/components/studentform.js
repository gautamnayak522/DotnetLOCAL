import React, { useState } from "react";
export default function StudentForm() {
  const [inputs, setInputs] = useState({});
  const [allentries, addentry] = useState([]);
  const [listitems, setlistitems] = useState();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addentry((all) => [...all, inputs]);
    setInputs({});
    alert("Detais Saved Succefully");
  };

  function printdata() {
    let list =
      allentries &&
      allentries.map((obj) => (
        <tr>
          <td>{obj.username}</td>
          <td>{obj.gender}</td>
          <td>{obj.State}</td>
          <td>{obj.city}</td>
          <td>{obj.Hobbies}</td>
          <td>{obj.contact}</td>
        </tr>
      ));
    setlistitems(list);
  }

  return (
    <div className="w-50 p-5 m-auto bg-secondary text-white ">
        <h3>Student Details Form</h3> <br/>
      <form onSubmit={handleSubmit} className="frm">
        <label>Name :</label>
        <input
          type="text"
          name="username"
          className="form-control"
          value={inputs.username || ""}
          onChange={handleChange}
        />
        <br />
        <label>Gender :</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          className="form-check-input"
          onChange={handleChange}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          className="form-check-input"
          onChange={handleChange}
        />
        Female
        <br /> <br />
        <label>State :</label>
        <select name="State" onChange={handleChange} className="form-control">
          <option value="">Select</option>
          <option value="Gujarat">Gujarat</option>
          <option value="Maharastra">Maharastra</option>
        </select>
        <br />
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={inputs.city || ""}
          className="form-control"
          onChange={handleChange}
        />
        <br />
        <label>Hobbies :</label>
        <textarea
          name="Hobbies"
          value={inputs.Hobbies || ""}
          className="form-control"
          onChange={handleChange}
        />
        <br />
        <label>Enter your Number :</label>
        <input
          type="text"
          name="contact"
          value={inputs.contact || ""}
          className="form-control"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      {JSON.stringify(inputs)}
      <br />
      <br />
      <button onClick={printdata}>ShowDetails</button>

      <br />
      <table className="table pt-5 w-25">
        <caption>LIST OF Students</caption>
        <thead>
          <tr>
            <th>username</th>
            <th>gender</th>
            <th>State</th>
            <th>city</th>
            <th>Hobbies</th>
            <th>contact</th>
          </tr>
        </thead>

        <tbody>{listitems}</tbody>
      </table>
    </div>
  );
}
