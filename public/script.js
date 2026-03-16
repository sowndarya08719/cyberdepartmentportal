// Fake session check
const user = localStorage.getItem("user");

if (!user) {
  window.location.href = "login.html";
}

document.getElementById("welcome").innerText =
  "Welcome, " + JSON.parse(user).email;

function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}