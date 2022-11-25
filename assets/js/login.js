let btn = document.querySelector('#pass')

let username = document.querySelector('#username')
let labelUsername = document.querySelector('#labelUsername')
let validUsername = false

let password = document.querySelector('#password')
let labelPass = document.querySelector('#labelPass')
let validPassword = false

let msgSuccess = document.querySelector('#msgSuccess')
let msgError = document.querySelector('#msgError')

username.addEventListener('keyup', ()=> {
    if(username.value.length <= 2){
        labelUsername.setAttribute('style', 'color: red')
        labelUsername.innerHTML = '<strong>Email* more than 6 caracters...</strong>'
        username.setAttribute('style', 'border-color: red')
        validUsername = false
    }else{
        labelUsername.setAttribute('style', 'color: green')
        labelUsername.innerHTML = '<strong>Email</strong>'
        username.setAttribute('style', 'border-color: green')
        validUsername = true
    }
})

password.addEventListener('keyup', ()=> {
    if(password.value.length <= 2){
        labelPass.setAttribute('style', 'color: red')
        labelPass.innerHTML = '<strong>Password* more than 6 caracters...</strong>'
        password.setAttribute('style', 'border-color: red')
        validPassword = false
    }else{
        labelPass.setAttribute('style', 'color: green')
        labelPass.innerHTML = '<strong>Password</strong>'
        password.setAttribute('style', 'border-color: green')
        validPassword = true
    }
})

btn.addEventListener('click', ()=>{
    let inputPass = document.querySelector('#password')
    if(inputPass.getAttribute('type')  == 'password'){
        inputPass.setAttribute('type', 'text')
    }else{
        inputPass.setAttribute('type', 'password')
    }
})

const clearFields = ()=> {
    const fields = document.querySelectorAll('.field')
    fields.forEach(field => field.value = "")
} 

const connexion = (e)=> {
    if(validUsername && validPassword){
        var user = document.getElementById('username').value
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Field Confirm</strong>'

        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''
        
        let userForm = document.getElementById('username').value
        let passForm = document.getElementById('password').value
        
        var users = JSON.parse(localStorage.getItem('db_user')) || []
            let exist = users.length && JSON.parse(localStorage.getItem('db_user')).some(data=> 
                data.username.toLowerCase() == userForm.toLowerCase() &&
                data.password == passForm
            );

            if(exist){
                 location.href = 'facture.html';
                // console.log('Logged in ...')
            }else{
                msgError.setAttribute('style', 'display: block')
                msgError.innerHTML = '<strong>User Name or Password incorrect... </strong>'
                clearFields()
                msgSuccess.setAttribute('style', 'display: none')
                msgSuccess.innerHTML = ''
            }
            
    }else{
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = '<strong>Field must be Valid</strong>'

        msgSuccess.setAttribute('style', 'display: none')
        msgSuccess.innerHTML = ''

    }

    e.preventDefault();
}