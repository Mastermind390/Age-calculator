

const submitBtnEl = document.querySelector('.Submit-button').addEventListener('click', ()=>{
    displayMessage()
    //checkDateIput();
    
})

function displayMessage() {
    //checkDateIput()
    
    const DateInputEl = document.querySelector('.date-input');
    const monthInputEl = document.querySelector('.month-input');
    const yearInput = document.querySelector('.year-input');
    const dayErrorMessage = document.querySelector('.date-input-error-message');
    const monthErrorMessage = document.querySelector('.month-input-error-message');
    const yearErrorMessage = document.querySelector('.year-input-error-message');
    console.log(yearErrorMessage)

    if (DateInputEl.value === '' && monthInputEl.value === '' && yearInput.value === '') {
        dayErrorMessage.innerHTML = 'This field is required';
        monthErrorMessage.innerHTML = 'This field is required';
        yearErrorMessage.innerHTML = 'This field is required';
    } else if (DateInputEl.value === '') {
        dayErrorMessage.innerHTML = 'This field is required';
    } else if (monthInputEl.value === '') {
        monthErrorMessage.innerHTML = 'This field is required';
    } else if (yearInput.value === '') {
        yearErrorMessage.innerHTML = 'This field is required';
    } 

    const userDay = DateInputEl.value;
    const userMonth = monthInputEl.value;
    const userYear = yearInput.value;

    if (userDay > 30 && userMonth === 4) {
        console.log('i am working')
        dayErrorMessage.innerHTML = 'Must be valid date';
    } else if (userDay > 30 && userMonth === 6) {
        dayErrorMessage.innerHTML = 'Must be valid date';
    } else if (userDay > 30 && userMonth === 9) {
        dayErrorMessage.innerHTML = 'Must be valid date';
    } else if (userDay > 30 && userMonth === 11) {
        dayErrorMessage.innerHTML = 'Must be valid date';
    }
    
}

    


function checkDateIput() {
``
    const userDay = DateInputEl.value;
    const userMonth = monthInputEl.value;
    const userYear = yearInput.value;

    if (userDay > 30 && userMonth === 4) {
        console.log('i am working')
        dayErrorMessage.innerHTML = 'Must be valid date';
    } else if (userDay > 30 && userMonth === 6) {
        dayErrorMessage.innerHTML = 'Must be valid date';
    } else if (userDay > 30 && userMonth === 9) {
        dayErrorMessage.innerHTML = 'Must be valid date';
    } else if (userDay > 30 && userMonth === 11) {
        dayErrorMessage.innerHTML = 'Must be valid date';
    }
   
}

//checkDateIput()


