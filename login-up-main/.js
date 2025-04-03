const openedEyePath = 'opened-eye.png';
const closedEyePath = 'closed-eye.png'

const eye = document.querySelector('.eye');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const signInButton = document.querySelector('#sign-in-button');
const signUpButton = document.querySelector('#sign-up-button');

eye.addEventListener('click', () => {
    if (password.getAttribute('type') === 'password') {
        password.setAttribute('type', 'text');
        eye.setAttribute('src', closedEyePath)
    } else {
        password.setAttribute('type', 'password');
        eye.setAttribute('src', openedEyePath)
    }
})

const data ={
    email: '',
    password: ''
};

password.addEventListener('keyup', () => {
    data.password =  password.value
})

email.addEventListener('keyup', () => {
    data.email =  email.value
})

signInButton.addEventListener('click', () => {
    console.log(data)
})
signUpButton.addEventListener('click', () => {
    console.log(data)
})