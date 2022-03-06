const form = document.querySelector(".form");
const userName = document.querySelector(".name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");

// show Error
const showError = (input, message) => {
  const inputControl = input.parentElement;
  inputControl.className = "form-control error";
  const small = inputControl.querySelector("small");
  small.innerText = message;
};
const showSuccess = (input) => {
  const inputControl = input.parentElement;
  inputControl.className = "form-control success";
};

// email valid
const isValidate = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameValue = userName.value.trim();
  const emailValue = email.value.trim();
  if (nameValue === "") {
    showError(userName, "Username is required");
  } else {
    showSuccess(userName);
  }
  if (emailValue === "") {
    showError(email, "Email is required");
  } else if (!isValidate(email.value)) {
    showError(email, "Email is not valid");
  } else {
    showSuccess(email);
  }
  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }
});
