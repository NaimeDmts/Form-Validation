 const form = document.getElementById('form');
 const username = document.getElementById('username');
 const email = document.getElementById('email');
 const phone = document.getElementById('phone');
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

function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(String(email).toLowerCase());
    if(re.test(input.value)){
        success(input);
    } else{
        error(input, 'Wrong e-mail address!')
    }
}

function checkRequired(inputs){
    inputs.forEach(function(input)
    {
        if(input.value === ''){
            error(input, `${input.id} is required!`);
        }else{
           success(input);
        }
    });
}

function checkLength(input, min, max){
    if(input.value.length < min){
        error(input, `${input.id} must be at least ${min} characters`);
    }else if(input.value.length > max){
        error(input, `${input.id} must be a maximum of ${max} characters`);
    }else{
        success(input);
    }
}

function checkPasswords(input1,input2){
    if(input1.value !==input2.value){
        error(input2, 'password does not match!');
    }
}

function checkPhone(input){
    var exp =  /^\d{10}$/;
    if(!exp.test(input.value)){
        error(input, 'format not')
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username,email,phone,password,repassword]);
    validateEmail(email);
    checkLength(username,5,10);
    checkLength(password,8,15);
    checkPasswords(password,repassword);
    checkPhone(phone);
})