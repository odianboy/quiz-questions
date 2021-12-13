let form = document.querySelector('.formWithValidation')
let img = document.querySelector('.cover')
let validateBtn = form.querySelector('.validateBtn')
let userName = form.querySelector('.userName')
let userEmail = form.querySelector('.userEmail')
let reportAnswer = form.querySelector('.reportAnswer')
let numAnswer = form.querySelector('.numAnswer')
let radioAnswer = form.querySelector('.radioAnswer')
let radioAnswerCity = form.querySelector('.radioAnswerCity')

let radioBtnYear = document.getElementsByName('answer')
let radioBtnCity = document.getElementsByName('answerCity')

let formGroup1 = document.querySelector('#form-group-1')
let formGroup2 = document.querySelector('#form-group-2')
let formGroup3 = document.querySelector('#form-group-3')
let formGroup4 = document.querySelector('#form-group-4')
let formGroup5 = document.querySelector('#form-group-5')
let formGroup6 = document.querySelector('#form-group-6')
let formGroup7 = document.querySelector('#form-group-7')
let formGroup8 = document.querySelector('#form-group-8')

let multDocs = document.getElementById('multDoc')
let multTheory = document.getElementById('multTheory')
let numAnswerFlat = form.querySelector('.numAnswerFlat')

// Установить цвет background
function backColor(formGroup, color) {
    formGroup.style.background = color
}

// Генерация ошибок
function generateError(text) {
    img.src = 'TBB3.jpg'
    let error = document.createElement('div')
    error.className = 'error'
    error.style.color = 'red'
    error.innerHTML = text

    return error
}

// Чистка ошибок
function removeValidation() {
    let errors = form.querySelectorAll('.error')

    for (let i = 0; i < errors.length; i++) {
        errors[i].remove()
    }
}

// Проврерка на содержание только букв
function checkTextInput(className) {
    if (!(className.value.match(/^[A-Za-zА-Яа-яЁё\s\,]*$/))) {
        let error = generateError('Имя может содержать только буквы')
        className.parentElement.insertBefore(error, className)

        return true
    }
}

// Проврека ввода имени

function checkStringInput(className, formGroup) {
    if (!className.value) {
        let error = generateError('Поле должно быть заполненно')
        backColor(formGroup, '#ffe5e5')
        className.parentElement.insertBefore(error, className)
    } else if (checkTextInput(className)) {
        backColor(formGroup, '#ffe5e5')
    } else if (checkEmailInput()) {
        backColor(formGroup, '#ffe5e5')
    } else {
        backColor(formGroup, '#c2ebfc')
    }
}

// Проврека ввода email
function checkEmailInput() {
    if (!userEmail.value) {
        let error = generateError('Поле должно быть заполненно')
        userEmail.parentElement.insertBefore(error, userEmail)

        return true
        
    } else if (userEmail.value && !(userEmail.value.match('[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+'))) {
        let error = generateError('Пример: spiderMan@gmail.com')
        userEmail.parentElement.insertBefore(error, userEmail)

        return true
}
}

// Проврека радио-кнопок
function checkRadioBtn(classRadio, formGroup, radioBtn) {
    let radioValid = false;

    let i = 0;
    while (!radioValid && i < radioBtn.length) {
        if (radioBtn[i].checked) {
            radioValid = true
        }
        i++      
    }

    if (!radioValid) {
        let error = generateError('Поле должно быть заполненно')
        classRadio.parentElement.insertBefore(error, classRadio)
        backColor(formGroup, '#ffe5e5')
    } else {
        backColor(formGroup, '#c2ebfc')
    }
}

// Проврека цифр
function checkNumInput(className, formGroup) {
    if (!className.value) {
        let error = generateError('Поле должно быть заполненно')
        className.parentElement.insertBefore(error, className)
        backColor(formGroup, '#ffe5e5')
    } else if (isNaN(className.value)) {
        let error = generateError('Возможен ввод только цифр')
        className.parentElement.insertBefore(error, className)
        backColor(formGroup, '#ffe5e5')
    } else {
        backColor(formGroup, '#c2ebfc')
    }
}

// Проврека множественного выбора
function checkSelectСhoice(idName, formGroup) {
    let selected = Array.from(idName.options)
    .filter(option => option.selected)
    .map(option => option.value);

    if (selected.length == 0) {
        let error = generateError('Поле должно быть заполненно')
        idName.parentElement.insertBefore(error, idName)
        backColor(formGroup, '#ffe5e5')
    } else {
        backColor(formGroup, '#c2ebfc')
    }
}

form.addEventListener('submit', function (event) {

    removeValidation()

    checkStringInput(userName, formGroup1)
    checkStringInput(reportAnswer, formGroup3)
    checkNumInput(numAnswer, formGroup4)
    checkNumInput(numAnswerFlat, formGroup7)
    checkRadioBtn(radioAnswer, formGroup2, radioBtnYear)
    checkRadioBtn(radioAnswerCity, formGroup5, radioBtnCity)
    checkSelectСhoice(multDocs, formGroup6)
    checkSelectСhoice(multTheory, formGroup8)

    
    let errors = form.querySelectorAll('.error')

    if (errors.length != 0) {
        event.preventDefault()
    }
})