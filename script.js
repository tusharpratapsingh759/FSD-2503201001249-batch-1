const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

function checkPassword() {

    if (confirmPassword.value === "") {
        message.innerHTML = "";
        return;
    }

    if (password.value === confirmPassword.value) {
        message.innerHTML = " Password Matched";
        message.className = "success";
    } else {
        message.innerHTML = " Password DO Not Matched";
        message.cl
    }
}

password.addEventListener("keyup", checkPassword);
confirmPassword.addEventListener("keyup", checkPassword);