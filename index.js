const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault;

  checkInputs();
});

function checkInputs() {
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (fnameValue === "") {
    setErrorFor(fname, "First Name cannot be empty");
  } else {
    setSuccessFor(fname);
  }

  if (lnameValue === "") {
    setErrorFor(lname, "Last Name cannot be empty");
  } else {
    setSuccessFor(lname);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email not valid");
  } else {
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
  } else {
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const inputField = input.parentElement;
  const small = inputField.querySelector("small");
  small.innerText = message;

  inputField.className = "inputField error";
}

function setSuccessFor(input) {
  const inputField = input.parentElement;
  inputField.className = "inputField success";
}

function isEmail(email) {
  var format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return format.test(email);
}
