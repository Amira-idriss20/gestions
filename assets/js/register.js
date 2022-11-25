let btn = document.querySelector('#pass')
let btnConfirm = document.querySelector('#passconfirm')

let fullname = document.querySelector('#fullname')
let labelFullname = document.querySelector('#labelFullname')
let validFullname = false

let username = document.querySelector('#username')
let labelUsername = document.querySelector('#labelUsername')
let validUsername = false

let password = document.querySelector('#password')
let labelPass = document.querySelector('#labelPass')
let validPassword = false

let passwordconfirm = document.querySelector('#passwordconfirm')
let labelPassconfirm = document.querySelector('#labelPassconfirm')
let validPasswordconfirm = false

let msgSuccess = document.querySelector('#msgSuccess')
let msgError = document.querySelector('#msgError')

fullname.addEventListener('keyup', ()=> {
    if(fullname.value.length <= 2){
        labelFullname.setAttribute('style', 'color: red')
        labelFullname.innerHTML = '<strong>Insert a Full Name* more than 6 caracters...</strong>'
        fullname.setAttribute('style', 'border-color: red')
        validFullname = false
    }else{
        labelFullname.setAttribute('style', 'color: green')
        labelFullname.innerHTML = '<strong>Full Name</strong>'
        fullname.setAttribute('style', 'border-color: green')
        validFullname = true
    }
})

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

passwordconfirm.addEventListener('keyup', ()=> {
    if(password.value != passwordconfirm.value){
        labelPassconfirm.setAttribute('style', 'color: red')
        labelPassconfirm.innerHTML = '<strong>Password Confirm* must be equal to password...</strong>'
        passwordconfirm.setAttribute('style', 'border-color: red')
        validPasswordconfirm = false
    }else{
        labelPassconfirm.setAttribute('style', 'color: green')
        labelPassconfirm.innerHTML = '<strong>Password Confirm</strong>'
        passwordconfirm.setAttribute('style', 'border-color: green')
        validPasswordconfirm = true
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

btnConfirm.addEventListener('click', ()=>{
    let inputConfirmPass = document.querySelector('#passwordconfirm')
    if(inputConfirmPass.getAttribute('type')  == 'password'){
        inputConfirmPass.setAttribute('type', 'text')
    }else{
        inputConfirmPass.setAttribute('type', 'password')
    }
})


const getLocalStorage = ()=> JSON.parse(localStorage.getItem('db_user'))??[]
const setLocalStorage = (db_user)=> localStorage.setItem('db_user', JSON.stringify(db_user))

const readUser = ()=> getLocalStorage()

const createStudent = (user)=> {
    const db_user = getLocalStorage()
    db_user.push(user)
    setLocalStorage(db_user)
} 


const clearFields = ()=> {
    const fields = document.querySelectorAll('.field')
    fields.forEach(field => field.value = "")
} 

const display_user = (user)=> {
    console.log(user.fullname)
}

function register(){
    if(validFullname && validUsername && validPassword && validPasswordconfirm){
        msgSuccess.setAttribute('style', 'display: block')
        msgSuccess.innerHTML = '<strong>Record saved successfuly...</strong>'

        msgError.setAttribute('style', 'display: none')
        msgError.innerHTML = ''

        const user = {
            fullname: document.getElementById('fullname').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value,
            passwordconfirm: document.getElementById('passwordconfirm').value,
        }
 
        let userForm = document.getElementById('username').value
        
        var users = JSON.parse(localStorage.getItem('db_user')) || []
            let exist = users.length && JSON.parse(localStorage.getItem('db_user')).some(data=> 
                data.username.toLowerCase() == userForm.toLowerCase()
            );

            if(!exist){
                createStudent(user)
                clearFields()
            }else{
                msgError.setAttribute('style', 'display: block')
                msgError.innerHTML = '<strong>This user is already exist</strong>'
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
}
