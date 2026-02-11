document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        let valid = true;

        if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
            emailError.style.display = "block";
            valid = false;
        } else {
            emailError.style.display = "none";
        }

        if (passwordInput.value.length < 6) {
            alert("Password must be at least 6 characters!");
            passwordError.style.display = "block";
            valid = false;
        } else {
            passwordError.style.display = "none";
        }

        if (valid) {
            document.getElementById('signup-form').style.display = 'none';
            document.getElementById('loading-screen').style.display = 'block';

            setTimeout(() => {
                document.getElementById('loading-screen').style.display = 'none';
                document.getElementById('payment-section').style.display = 'block';
            }, 1500);
        }
    });
});
