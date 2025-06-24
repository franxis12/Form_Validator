const registerForm = document.getElementById("registerForm")
const usersInfo = []
const username = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const passwordConfirm = document.getElementById("passwordConfirm")
const about = document.getElementById("bio")

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

const passHasLower = /[a-z]/;
const passHasCaps = /[A-Z]/;
const passHasNum = /\d/;
const passHasSpec = /[\W_]/;
const passHas8 = /^.{8,}$/;

let nameInput = false;
let emailInput = false;
let passInput = false;
let passConfirmInput = false;


const hasCapsLI = document.getElementById("hasCap")
const hasLowerLI = document.getElementById("hasLow")
const hasSpecLI = document.getElementById("hasSpe")
const hasNumLI = document.getElementById("hasNum")
const has8MoreLI = document.getElementById("has8More")
const passMatchLI = document.getElementById("passMatch")

const listUser = []

username.addEventListener("input", () => {
    if(username.value.length < 3){
        username.classList.add("error-border");
        username.classList.remove("success-border")
        nameInput = false
    } else {
        username.classList.remove("error-border")
        username.classList.add("success-border")
        nameInput = true
    }

})

email.addEventListener("input", () => {
    const emailVal = email.value;
    const isValid = emailRegex.test(emailVal)
    
    if(!isValid){
        email.classList.add("error-border");
        email.classList.remove("success-border");
        emailInput = false

    } else {
        email.classList.remove("error-border")
    }

    if(isValid){
        email.classList.add("success-border");
        emailInput = true
    }
})

password.addEventListener("input", () => {
    const passVal = password.value;
    const isValidLower = passHasLower.test(passVal);
    const isValidCaps = passHasCaps.test(passVal);
    const isValidCNum = passHasNum.test(passVal);
    const isValidSpec = passHasSpec.test(passVal);
    const isValid8Min = passHas8.test(passVal);

    if(password.value !== passwordConfirm.value || password.value === "" || passwordConfirm === ""){
        passMatchLI.classList.remove("text-success-personalized")
        passMatchLI.classList.add("text-danger-personalized")
    }else {
        passMatchLI.classList.add("text-success-personalized")
        passMatchLI.classList.remove("text-danger-personalized")
    }
    
    console.log(isValidSpec)

    if(!isValidLower || !isValidCaps || !isValidCNum || !isValidSpec || !isValid8Min){
        password.classList.add("error-border");
        password.classList.remove("success-border");
        passInput = false

    }else {
        password.classList.remove("error-border")
    }

    if(isValidLower && isValidCaps && isValidCNum && isValidSpec && isValid8Min){
        password.classList.add("success-border");
        passInput = true
    }

    if(isValidLower){
        hasLowerLI.classList.add("text-success-personalized")
        hasLowerLI.classList.remove("text-danger-personalized")
    }else{
        hasLowerLI.classList.add("text-danger-personalized")
        hasLowerLI.classList.remove("text-success-personalized")
    }

    if(isValidCaps){
        hasCapsLI.classList.add("text-success-personalized")
        hasCapsLI.classList.remove("text-danger-personalized")
    }else{
        hasCapsLI.classList.add("text-danger-personalized")
        hasCapsLI.classList.remove("text-success-personalized")
    }

    if(isValidCNum){
        hasNumLI.classList.add("text-success-personalized")
        hasNumLI.classList.remove("text-danger-personalized")
    }else{
        hasNumLI.classList.add("text-danger-personalized")
        hasNumLI.classList.remove("text-success-personalized")
    }

    if(isValidSpec){
        hasSpecLI.classList.add("text-success-personalized")
        hasSpecLI.classList.remove("text-danger-personalized")
    }else{
        hasSpecLI.classList.add("text-danger-personalized")
        hasSpecLI.classList.remove("text-success-personalized")
    }

    if(isValid8Min){
        has8MoreLI.classList.add("text-success-personalized")
        has8MoreLI.classList.remove("text-danger-personalized")
    }else{
        has8MoreLI.classList.add("text-danger-personalized")
        has8MoreLI.classList.remove("text-success-personalized")
    }
    
})

passwordConfirm.addEventListener("input", () => {
    if(password.value !== passwordConfirm.value || password.value === "" || passwordConfirm === ""){
        passMatchLI.classList.remove("text-success-personalized")
        passMatchLI.classList.add("text-danger-personalized")
        passwordConfirm.classList.add("error-border");
        passwordConfirm.classList.remove("success-border");
        passConfirmInput = false
    }else {
        passMatchLI.classList.add("text-success-personalized")
        passMatchLI.classList.remove("text-danger-personalized")
        passwordConfirm.classList.remove("error-border")
        passwordConfirm.classList.add("success-border");
        passConfirmInput = true
    }

})

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if(username.value === "" || email.value === "" || password.value === "" || passwordConfirm.value == ""){
        username.classList.add("error-border");
        email.classList.add("error-border");
        password.classList.add("error-border");
        passwordConfirm.classList.add("error-border");
        return;
    }

    if(!nameInput || !emailInput || !passInput || !passConfirmInput){
        alert("Algunos de los campos no fue completado correctamente")
        return
    }



    const userToSummit = {
        userName: username.value,
        email: email.value,
        password: password.value,
        about: about.value
    }
    
    listUser.push(userToSummit);
    console.log(listUser)
})
