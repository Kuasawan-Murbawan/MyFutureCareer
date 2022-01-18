function setContent()
{

    var at = document.getElementById("email").value.indexOf("@");
    var fname = document.getElementById("fname").value;
    var fname = document.getElementById("lname").value;
    submitOK = "true";

if (fname.length < 0) {
    alert("Please fill your First Name");
    submitOK = "false";
  }

  if (lname.length < 0) {
      alert("Please fill your Last Name");
      submitOK = "false";
    }


  if (at == -1) {
    alert("Not a valid e-mail!");
    submitOK = "false";
  }

  if (submitOK == "false") {
    return false;
  }

  if (submitOK == "true") {
    alert("Thank You for Applying to the Job");
  }


}
