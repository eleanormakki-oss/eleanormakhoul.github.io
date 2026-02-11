document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const correctEmail = "user@example.com";
    const correctPassword = "password123";

    const enteredEmail = document.getElementById("email").value;
    const enteredPassword = document.getElementById("password").value;

    if (enteredEmail === correctEmail && enteredPassword === correctPassword) {
      document.querySelector(".login-container").style.display = "none";
      document.querySelector(".top-words").style.display = "none";
      document.querySelector(".bottom-words").style.display = "none";  
      document.getElementById("loading-screen").style.display = "block";

      setTimeout(function () {
        window.location.href = "member-account.html";
      }, 1500);
    } else {
      alert("Invalid email or password. Please try again.");
    }
  });
});
