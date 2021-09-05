let saveButton = document.getElementById("save");
let form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
});

saveButton.addEventListener("click", function (e) {
  let name = document.getElementById("name");
  let email = document.getElementById("email");

  name = name.value;
  localStorage.setItem("name", name);

  email = email.value;
  localStorage.setItem("email", email);
});
