const inputName = document.querySelector('#name');
const inputSurname = document.querySelector('#surname');
const inputEmail = document.querySelector('#email');
const inputNumber = document.querySelector('#number');
const section1Errors = document.querySelectorAll('.section1__error');

inputName.addEventListener("input", (e) => {
    if (inputName.value === "") {
        section1Errors[0].innerHTML = `*It is required to input your name`;
    }
    else {
        section1Errors[0].innerHTML = ``;
    }
});

inputSurname.addEventListener("input", (e) => {
    if (inputSurname.value === "") {
        section1Errors[1].innerHTML = `*It is required to input your surname`;
    }
    else {
        section1Errors[1].innerHTML = ``;
    }
});

inputEmail.addEventListener("input", (e) => {
    if (inputEmail.validity.typeMismatch) {
        section1Errors[2].innerHTML = `*Please enter valid email`;
    }
    else {
        section1Errors[2].innerHTML = ``;
    }
});

inputNumber.addEventListener("input", (e) => {
    if (inputNumber.validity.patternMismatch) {
        section1Errors[3].innerHTML = `*Please enter valid phone number`;
    }
    else {
        section1Errors[3].innerHTML = ``;
    }
});