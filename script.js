document.addEventListener("DOMContentLoaded", function () {
    let passwordValueInput = document.querySelector(".password");
    let passwordConfirmValueInput = document.querySelector(".confirm_password");
    let mismatchMessage = document.querySelector(".password-mismatch-message");


    function validatePassword() {
        if (passwordValueInput.value !== passwordConfirmValueInput.value) {
            passwordConfirmValueInput.setCustomValidity("Passwords do not match")
            mismatchMessage.textContent = "Passwords do not match";
        } else {
            passwordConfirmValueInput.setCustomValidity("")
            mismatchMessage.textContent = "";
        }
    }

    passwordConfirmValueInput.addEventListener("input", validatePassword);
    passwordValueInput.addEventListener("input", validatePassword);

});



