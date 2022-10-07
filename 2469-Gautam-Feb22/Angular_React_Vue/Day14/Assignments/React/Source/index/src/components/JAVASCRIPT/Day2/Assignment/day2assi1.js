export default function Day2assi1() {
  function checkDate() {
    var DATE = document.getElementById("dt").value;
    const dateArray = DATE.split("-");

    var mm = parseInt(dateArray[0]);
    var dd = parseInt(dateArray[1]);
    var yyyy = parseInt(dateArray[2]);

    if (DATE.length == 10) {
      if (mm == 2) {
        if (dd > 0 && dd <= 28) {
          if (yyyy > 1800) {
            alert("Date is Valid");
            document.getElementById("date").innerHTML = "VALID DATE : " + DATE;
          } else {
            alert("Enter Correct Date");
            document.getElementById("date").innerHTML =
              "INVALID DATE : " + DATE;
          }
        } else {
          alert("Enter Correct Date");
          document.getElementById("date").innerHTML = "INVALID DATE : " + DATE;
        }
      } else {
        if (mm > 0 && mm <= 12) {
          if (dd > 0 && dd <= 31) {
            if (yyyy > 1800) {
              alert("Date is Valid");
              document.getElementById("date").innerHTML =
                "VALID DATE : " + DATE;
            } else {
              alert("Enter Correct Date");
              document.getElementById("date").innerHTML =
                "INVALID DATE : " + DATE;
            }
          } else {
            alert("Enter Correct Date");
            document.getElementById("date").innerHTML =
              "INVALID DATE : " + DATE;
          }
        } else {
          alert("Enter Correct Date");
          document.getElementById("date").innerHTML = "INVALID DATE : " + DATE;
        }
      }
    } else {
      alert("Enter Correct Datee");
      document.getElementById("date").innerHTML = "INVALID DATE : " + DATE;
    }
  }
  return (
    <div>
      <h3>
        Date entered by the user should be checked for whether it is a Valid
        Date or not.
      </h3>

      <form className="p-5">
        <label>Enter Date</label>
        <input type="text" id="dt" placeholder="MM-DD-YYYY" />
        <br />
        <span className="text-muted">Date Format : MM-DD-YYYY</span>
        <br /> <br />
        <button className="bg-secondary" type="button" onClick={checkDate}>
          Submit
        </button>
        <br />
        <p id="date" />
      </form>
    </div>
  );
}
