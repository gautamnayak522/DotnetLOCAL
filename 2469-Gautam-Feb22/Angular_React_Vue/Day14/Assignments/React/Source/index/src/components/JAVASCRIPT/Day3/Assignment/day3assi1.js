export default function day3assi1() {
  function checkvalidation() {
    var e = document.getElementById("eid").value;
    let epattern = "^.{5}|.{5}.$";
    if (e.match(epattern)) {
      document.getElementById("checkid").style.display = "none";
    } else {
      document.getElementById("checkid").style.display = "inline-block";
      document.getElementById("checkid").innerHTML =
        "Id should not blank or atleast 5 char long";
    }

    var ename = document.getElementById("name").value;
    if (ename == "") {
      document.getElementById("checkname").style.display = "inline-block";
      document.getElementById("checkname").innerHTML = "Name shold not blank";
    } else {
      document.getElementById("checkname").style.display = "none";
    }
  }
  return (
    <div>
      <h2>form for storing employee details. </h2>
      <form className="form-control text-black">
        <span id="checkid"/>
        <br />
        <label htmlFor="eid">Employee Id :</label>
        <input type="text" id="eid" name="eid" placeholder="Enter Id" />
        <br />
        <br />
        <span id="checkname"/>
        <br />
        <label for="name">Employee Name :</label>
        <input type="text" id="name" name="name" placeholder="Enter Name" />
        <br />
        <br />
        <label for="age">Age :</label>
        <input
          type="number"
          id="age"
          name="age"
          placeholder="Enter Age"
          required
        />
        <br />
        <br />
        <label for="gender"> Gender : </label>
        <input type="radio" id="male" name="gender" value="MALE" required />
        <label for="male">Male</label>
        <input type="radio" id="female" name="gender" value="FEMALE" />
        <label for="female">Female</label> <br />
        <br />
        <label for="designation"> Designation :</label>
        <input
          type="text"
          id="designation"
          name="designation"
          placeholder="Enter Designation"
          required
        />
        <br />
        <br />
        <label for="salary"> Salary :</label>
        <input
          type="number"
          id="salary"
          name="salary"
          placeholder="Enter Salary"
          required
        />
        <br />
        <br />
        <label for="location"> Select Location :</label>
        <select name="location" id="location" required>
          <option value="">Select</option>
          <option value="ahmedabad">Ahmedabad</option>
          <option value="gandhinagar">Gandhinagar</option>
          <option value="baroda">Baroda</option>
          <option value="surat">Surat</option>
          <option value="rajkot">Rajkot</option>
        </select>
        <br />
        <br />
        <label for="email">Email id :</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter Email-id"
          required
        />
        <br />
        <br />
        <label for="doj">Date of Joining :</label>
        <input type="date" id="doj" name="doj" required />
        <br />
        <br />
        <label for="contact">Contact No. :</label>
        <input
          type="tel"
          id="contact"
          name="contact"
          placeholder="Enter contact No."
          pattern="[0-9]{10}"
          required
        />
        <br />
        <small>Format : 10 digit mobile number</small>
        <br />
        <br />
        <input type="submit" value="Submit" onClick={checkvalidation} />
      </form>
    </div>
  );
}
