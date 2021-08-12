const names = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');
const passwordE = document.getElementById('passwordError');
form.addEventListener('submit', (e) => {
    let message = [];
    let ps =[];
    if (names.value === '' || names.value == null){
        message.push('name is required')
    }
    if(password.value.length <= 6){
        ps.push('password is short')
    }

    if (password.value === 'password'){
        ps.push('password cannot be password');
    }
    else{
        alert('pasword is noted')
    }
    if (ps.length > 0){
        e.preventDefault()
        passwordE.innerText = ps.join(', ');
    }

    if (message.length > 0){
        e.preventDefault()
        errorElement.innerText = message.join(', ');
    }



  
})