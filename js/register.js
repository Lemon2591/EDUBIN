const getFirstName = document.getElementById("first-name");
const getLastName = document.getElementById("last-name");
const getUserName = document.getElementById("user-name");
const getEmail = document.getElementById("email");
const getPassword = document.getElementById("password");
const getConfirmPass = document.getElementById("password-confirmation");
const errFirstName = document.getElementById("0001");
const errLastName = document.getElementById("0002");

const reGexName = /^[a-zA-Z '.]*$/;

getFirstName.addEventListener("blur", () => {
  if (getFirstName.value === "") {
    errFirstName.style.display = "block";
    getFirstName.style.borderColor = "red";
  } else {
    if (!reGexName.test(getFirstName.value)) {
      errFirstName.style.display = "block";
      getFirstName.style.borderColor = "red";
    } else {
      const errFirstName = document.getElementById("0001");
      errFirstName.style.display = "none";
      getFirstName.style.borderColor = "none";
    }
  }
});

getLastName.addEventListener("blur", () => {
  if (getLastName.value === "") {
    errLastName.style.display = "block";
    getLastName.style.borderColor = "red";
  } else {
    if (!reGexName.test(getLastName.value)) {
      errLastName.style.display = "block";
      getLastName.style.borderColor = "red";
    } else {
      errLastName.style.display = "none";
      getLastName.style.borderColor = "none";
    }
  }
});
