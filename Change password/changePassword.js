const passwordE1 = document.querySelector("#password");
const confirmPasswordE1 = document.querySelector("#confirm-password");
const form = document.querySelector("#signup");

form.addEventListener("submit",function(e) {
    e.preventDefault();

    let isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();
    let isFormValid = isPasswordValid && isPasswordValid && isConfirmPasswordValid;
    if(isFormValid){
        window.open('http://127.0.0.1:5500/login/login.html')
        window.close('http://127.0.0.1:5500/Change%20password/changePassword.html')
    }
})


let isRequired = value => value=== ''?false:true;

const isBetween = (length, min, max) => length < min || length >max? false: true;

let showError = (input, message) => {
    let formField = input.parentElement;
    formField.classList.remove("success");
    formField.classList.add("error");

    const error = formField.querySelector("small");
    error.textContent = message;
}

const showSuccess = (input) => {
    const formField = input.parentElement;
    formField.classList.remove("error");
    formField.classList.add("success");

    formField.querySelector("small").textContent = "";
}

const isPasswordValid = (password) =>{
    const re = 
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    return re.test(password);
}

function checkPassword(){
    let valid = false;
    const min = 3,
        max = 25;
    const password = passwordE1.value.trim();
    if(!isRequired(password)){
        showError(passwordE1,"You have to set a password");
    }
    else if(!isPasswordValid(password)){
        showError(passwordE1,"Password must be at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number and 1 special character ");
    }
    else{
        showSuccess(passwordE1)
        valid = true;
    }
    return valid;
}

function checkConfirmPassword(){
    let valid = false;
    const passwordCheck = confirmPasswordE1.value.trim();
    if(!isRequired(passwordCheck)){
        showError(confirmPasswordE1,"You will have to confirm to proceed");
    }
    else if(!passwordMatch()){
        showError(confirmPasswordE1,"Password is not matching");
    }
    else {
        showSuccess(confirmPasswordE1);
        valid = true;
    }
    return valid;
} 
const passwordMatch = () => {
    if(passwordE1.value == confirmPasswordE1.value){
        return true;
    }
}