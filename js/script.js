let form = document.getElementById('form');
// console.log(form);

//accessing the id elements of the script denoting
let user = document.getElementById('user');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let password = document.getElementById('pass');
let cpassword = document.getElementById('cpass');
// console.log(user);


//geting the error shower
let user_error = document.getElementById('user_error');
let email_error = document.getElementById('email_error');
let phone_error = document.getElementById('phone_error');
let pass_error = document.getElementById('pass_error');
let cpass_error = document.getElementById('cpass_error');


form.addEventListener('submit', (event)=>{
    event.preventDefault();
    //validator function is the on
    validator();
});

//defining the function
const validator = ()=>{
    let userVal = user.value.trim();
    let emailVal = email.value.trim();
    let phoneVal = phone.value.trim();
    let passVal = password.value.trim();
    let cpassVal = cpassword.value.trim();


    //actual validation
    //user validation
    if(userVal === ''){
        user_error.style.display = "block";
        user_error.innerText  = "this field is empty";
    }else if(userVal.length <= 3){
        user_error.style.display = "block";
        user_error.innerText  = "user name too short!";
    }else{
        user_error.style.display = "none";
    }

    //email validation
    if(emailVal === ''){
        email_error.style.display = "block";
        email_error.innerText  = "this field is empty";
    }else{
        email_error.style.display = "none";
    }


    //phone validation
    if(phoneVal === ''){
        phone_error.style.display = "block";
        phone_error.innerText ="this field is empty";
    }else if(isNaN(phoneVal) || phoneVal.length < 10){
        phone_error.style.display = "block";
        phone_error.innerText = "invalid phone number";
    }else{
        phone_error.style.display = "none";
    }
}
