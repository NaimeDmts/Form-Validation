const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword = document.getElementById('repassword');

function error(input, message){
    input.className = 'form-control is-invalid';
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}

function success(input){
    input.className = 'form-control is-valid'
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    if(username.value === ''){
        error(username, 'Username required');
    }else{
        success(username);
    }
    if(email.value === ''){
          error(email, 'Email required');
    }else if(!validateEmail(email.value)){
        error(email,'Not suitable for mail format!');
    }
    else{
         success(email);
    }
    if(password.value === ''){
          error(password,'Password required');
    }else{
          success(password );
    }
    if(repassword.value === ''){
        error(repassword,'Password again required');
    }else{
         success(repassword);
    }
})