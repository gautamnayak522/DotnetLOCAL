export default function Day1assi1() {
  return (
    <div>
      <form>
        <h1> Employee Details </h1>

        <label for="name">Name :</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter Name"
          required
        />
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

        <p>
          Gender :
          <input type="radio" id="male" name="gender" value="MALE" required />
          <label for="male">Male</label>
          <input type="radio" id="female" name="gender" value="FEMALE" />
          <label for="female">Female</label>
        </p>
        <br />
        <label for="designation"> Designation :</label>
        <input
          type="designation"
          id="designation"
          name="designation"
          placeholder="Enter Designation"
          required
        />
        <br />
        <br />

        <label for="salary"> Salary :</label>
        <input
          type="salary"
          id="salary"
          name="salary"
          placeholder="Enter Salary"
          required
        />
        <br />
        <br />

        <label for="location"> Select Location :</label>
        <select name="location" id="location" required>
          <option>select</option>
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

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
