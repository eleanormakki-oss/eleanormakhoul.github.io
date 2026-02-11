document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.querySelector(".login-button");
    const signupButton = document.querySelector(".signup-button");
    const tryButton = document.querySelector(".try-btn");


    loginButton.addEventListener("click", function () {
        window.location.href = "login.html";
    });

    signupButton.addEventListener("click", function () {
        window.location.href = "signup.html";
    });

    tryButton.addEventListener("click", function () {
        window.location.href = "signup.html";
    });

});
