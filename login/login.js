const PasswordE1 = document.querySelector("#Password");
const UsernameE1 = document.querySelector("#Username");
const form = document.querySelector("#signup");

form.addEventListener("submit",function(e) {
    e.preventDefault();

    let isStdnameValid = checkNames(),
        isIdsValid = checkIDs();
    let isFormValid = isStdnameValid && isIdsValid;
    if(isFormValid){
        window.open('http://127.0.0.1:5500/Home/home.html')
        window.close('http://127.0.0.1:5500/login/login.html')
    }
})
function checkIDs(){
    let valid = false;
    const ids= UsernameE1.value.trim();
    if(!isRequired(ids)){
        showError(UsernameE1, 'Username cannot be blank.');
    }
    else if(!isPasswordValid(ids)){
        showError(UsernameE1, `Username is not valid.`)
    }
    else{
        showSuccess(UsernameE1);
        valid = true;
    }
    return valid;
}

function checkNames(){
    let valid = false;
    const min = 3,
        max = 25;
    const name = PasswordE1.value.trim();
    if(!isRequired(name)){
        showError(PasswordE1, 'Password cannot be blank.');
    }
    else if(!isBetween(name.length, min, max)){
        showError(PasswordE1, `Password must be between ${min} and ${max} characters.`)
    }
    else{
        showSuccess(PasswordE1);
        valid = true;
    }
    return valid;
};

let isRequired = value => value=== ''?false:true;
const isBetween = (length, min, max) => length < min || length >max? false: true;
const isPasswordValid=(ids)=>{
    const re =/^[a-zA-Z\-0-9]{2,}$/;
    return re.test(ids);
}
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

 
    
  