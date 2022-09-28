let form = document.getElementById("Registration");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let errors = {};

  let form = event.target;

  let username = document.getElementById("Username").value;

  if (username.lenght < 5 || username == "") {
    errors.username = " username cant be empty ";
  }

  let password = document.getElementById("Password").value;
  let password2 = document.getElementById("Password2").value;

  if (password != password2) {
    errors.password2 = " passwords dont macth";
  }

  let checkbox = document.getElementById("checkbox").checked;

  if (checkbox == false) {
    errors.checkbox = " you must agree our terms ";
  }

  form.querySelectorAll(".error-text").forEach((item) => {
    item.innerHTML = "";
  });

  for (let item in errors) {
    console.log(item);

    let errorDiv = document.getElementById("error_" + item);

    if (errorDiv) {
      errorDiv.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});
