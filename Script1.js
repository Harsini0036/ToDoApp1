const form = document.querySelector("#form1");
const uname = document.querySelector("#uname1");

const pswd = document.querySelector("#pswdLogin");

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault();
  }
});

function validateInputs() {
  const unameVal = uname.value.trim();

  const pswdVal = pswd.value.trim();

  let success = true;

  if (unameVal === "") {
    success = false;
    setError(uname, "Username is required");
  } else {
    setSuccess(uname);
  }

  if (pswdVal === "") {
    success = false;
    setError(pswd, "Password is required");
  } else if (pswdVal.length < 8) {
    success = false;
    setError(pswd, "Password must be atleast 8 characters long");
  } else {
    setSuccess(pswd);
  }

  if (success) {
    alert("Login successful");
    window.location.assign("Home.html");
  } else {
    alert("Login failed");
    return;
  }
}

function setError(element, message) {
  const inputGrp = element.parentElement;
  // searches for .error only in that div
  const errorElement = inputGrp.querySelector(".error");
  errorElement.innerText = message;
  errorElement.style.color = "red";
}

function setSuccess(element) {
  const inputGrp = element.parentElement;

  const errorElement = inputGrp.querySelector(".error");
  errorElement.innerText = "";
  errorElement.style.color = "green";
}
