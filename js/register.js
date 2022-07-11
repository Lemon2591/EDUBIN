const getFirstName = document.getElementById("first-name");
const getLastName = document.getElementById("last-name");
const getUserName = document.getElementById("user-name");
const getEmail = document.getElementById("email");
const getPassword = document.getElementById("password");
const getConfirmPass = document.getElementById("password-confirmation");
const errFirstName = document.getElementById("0001");
const errLastName = document.getElementById("0002");
const errUserName = document.getElementById("0003");
const errUserNameBlank = document.getElementById("0004");
const errEmail = document.getElementById("0005");
const errPass = document.getElementById("0009");
const errCfPass = document.getElementById("0008");
const checkPass = document.getElementById("0006");
const checkCfPass = document.getElementById("0007");

const reGexName = /^[a-zA-Z '.]*$/;
const reGexUserName = /[a-zA-Z0-9._]/;
const reGexMail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

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
      getFirstName.style.borderColor = "#bbb";
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
      getLastName.style.borderColor = "#bbb";
    }
  }
});

getUserName.addEventListener("blur", () => {
  if (getUserName.value === "") {
    errUserName.style.display = "block";
    getUserName.style.borderColor = "red";
  } else {
    if (getUserName.value.length < 6 || getUserName.value.length > 20) {
      errUserNameBlank.style.display = "block";
      getUserName.style.borderColor = "red";
      errUserName.style.display = "none";
    } else {
      if (!reGexUserName.test(getUserName.value)) {
        errUserName.style.display = "block";
        getUserName.style.borderColor = "red";
        errUserNameBlank.style.display = "none";
      } else {
        errUserName.style.display = "none";
        getUserName.style.borderColor = "#bbb";
        errUserNameBlank.style.display = "none";
      }
    }
  }
});

getEmail.addEventListener("blur", () => {
  if (getEmail.value === "") {
    errEmail.style.display = "block";
    getEmail.style.borderColor = "red";
  } else {
    if (!reGexMail.test(getEmail.value)) {
      errEmail.style.display = "block";
      getEmail.style.borderColor = "red";
    } else {
      errEmail.style.display = "none";
      getEmail.style.borderColor = "#bbb";
    }
  }
});

getPassword.addEventListener("blur", () => {
  if (getPassword.value === "") {
    errPass.style.display = "block";
    getPassword.style.borderColor = "red";
  } else {
    errPass.style.display = "none";
    getPassword.style.borderColor = "#bbb";
  }
});

getConfirmPass.addEventListener("blur", () => {
  if (getConfirmPass.value === "") {
    errCfPass.style.display = "block";
    getConfirmPass.style.borderColor = "red";
  } else {
    if (getConfirmPass.value != getPassword.value) {
      checkPass.style.display = "block";
      getPassword.style.borderColor = "red";
      checkCfPass.style.display = "block";
      getConfirmPass.style.borderColor = "red";
    } else {
      checkPass.style.display = "none";
      getPassword.style.borderColor = "#bbb";
      checkCfPass.style.display = "none";
      getConfirmPass.style.borderColor = "#bbb";
      errCfPass.style.display = "none";
      getConfirmPass.style.borderColor = "#bbb";
    }
  }
});

const btnSubmit = document.getElementById("register-btn");
const inPuts = document.querySelectorAll(".input");
const err = document.querySelectorAll(".register-err");
console.log(inPuts);
console.log(err);

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let isOk = true;
  for (let inPut = 0; inPut <= 5; inPut++) {
    if (inPuts[inPut].value === "") {
      isOk = false;
      err[inPut].style.display = "block";
      inPuts[inPut].style.borderColor = "red";
    }
  }
  if (isOk) {
    alert("Successfully Register !");
    for (let fill = 0; fill <= 5; fill++) {
      inPuts[fill].value = "";
    }
  }
});
