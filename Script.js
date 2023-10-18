const form = document.querySelector("#form");
const uname = document.querySelector("#uname");
const email = document.querySelector("#email");
const pswd = document.querySelector("#pswd");
const pswd2 = document.querySelector("#pswd2");

form.addEventListener("submit", (e) => {
  if (!validateInputs()) {
    e.preventDefault();
    return;
  }
});

function validateInputs() {
  const unameVal = uname.value.trim();
  const emailVal = email.value.trim();
  const pswdVal = pswd.value.trim();
  const newpswdVal = pswd2.value.trim();
  let success = true;

  if (unameVal === "") {
    success = false;
    setError(uname, "Username is required");
  } else {
    setSuccess(uname);
  }

  if (emailVal === "") {
    success = false;
    setError(email, "Email Id is required");
  } else {
    setSuccess(email);
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

  if (newpswdVal === "") {
    success = false;
    setError(pswd2, "Re-enter password");
  } else if (newpswdVal !== pswdVal) {
    success = false;
    setError(pswd2, "Re-enter same password...");
  } else {
    setSuccess(pswd);
  }

  if (success) {
    alert("successfully registered");
    window.location.assign("Login.html");
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
  // searches for .error only in that div
  const errorElement = inputGrp.querySelector(".error");
  errorElement.innerText = "";
  errorElement.style.color = "green";
}
