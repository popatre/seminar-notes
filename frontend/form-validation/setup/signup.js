const userNameInput = document.getElementById("username");
const userNameError = document.getElementById("username-error");
const phoneNumberInput = document.getElementById("phonenumber");
const phoneNumberError = document.getElementById("phonenumber-error");
const signUpForm = document.getElementById("signup-form");

userNameInput.addEventListener("blur", validateUserName);
phoneNumberInput.addEventListener("keyup", validatePhoneNumber);
signUpForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(event) {
    const inputs = [...document.getElementsByClassName("signup-input")];
    // make sure they're all valid
    const areValid = inputs.every((input) => input.classList.contains("valid"));
    if (!areValid) {
        event.preventDefault();
    }
}

function validateUserName(event) {
    const input = event.target;

    if (/\d/.test(input.value)) {
        userNameError.innerText = "";
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        userNameError.innerText = "Username's must include at least one number";
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}

function validatePhoneNumber(event) {
    const input = event.target;

    if (/^\d+$/.test(input.value)) {
        phoneNumberError.innerText = "";
        input.classList.add("valid");
        input.classList.remove("invalid");
    } else {
        phoneNumberError.innerText = "Phone numbers can only contain numbers";
        input.classList.add("invalid");
        input.classList.remove("valid");
    }
}
