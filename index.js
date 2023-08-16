//clearErrorMessage()

const submitBtnEl1 = document.querySelector('.submit-button').addEventListener('click', ()=>{
    checkInputField();
})



function checkInputField() {
    const dayInputEl = document.getElementById('date-input');

    const monthInputEl = document.getElementById('month-input');
    
    const yearInputEl = document.getElementById('year-input');

    const dayError = document.getElementById('day-error-message');
    const monthError = document.getElementById('month-error-message');
    const yearError = document.getElementById('year-error-message');

    const userday = dayInputEl.value;
    const userMonth = monthInputEl.value;
    const userYear = yearInputEl.value;

    const newYear = new Date().getFullYear();
    
    if (userday > 31 && userMonth > 12 && userYear > newYear) {
        dayError.innerHTML = 'Enter a valid day';
        monthError.innerHTML = 'Enter a valid month';
        yearError.innerHTML = 'Must be in the past';
        

    } else if (userday > 31) {
        dayError.innerHTML = 'Enter a valid day';
        console.log('Enter a valid date');
    } else if (userMonth > 12) {
        monthError.innerHTML = 'Enter a valid month';
        console.log('Enter a valid month');
    } else if (userYear > newYear) {
        yearError.innerHTML = 'Must be in the past';
        console.log('Must be in the past');
    } else if (dayInputEl.value === '' && monthInputEl.value === '' && yearInputEl.value === '') {
        document.getElementById('day-error-message').innerHTML = 'field is required';
        document.getElementById('day-error-message').style.color = 'Red';
        document.getElementById('month-error-message').innerHTML = 'field is required';
        document.getElementById('month-error-message').style.color = 'Red';
        document.getElementById('year-error-message').innerHTML = 'field is required';
        document.getElementById('year-error-message').style.color = 'Red';

       
    } 
    
}


const submitBtnEl = document.getElementById('submit-button').addEventListener('click', ()=>{
    CalculateAge();
    //clearErrorMessage();
});

const submitBtnEl4 = document.getElementById('submit-button').addEventListener('click', ()=>{
    displayStaticText();
});


function displayStaticText() {
    const dayInputEl = document.getElementById('date-input');

    const monthInputEl = document.getElementById('month-input');
    
    const yearInputEl = document.getElementById('year-input');

    const newYear = new Date().getFullYear();
   
    if (dayInputEl.value === '' && monthInputEl.value === '' && yearInputEl.value === '') {
        const yearsDisplay = document.getElementById('span-year').innerHTML = '--';
        const monthsDisplay = document.getElementById('month-span').innerHTML = '--';
        const daysDisplay = document.getElementById('days-span').innerHTML = '--';
    } else if (dayInputEl.value === '') {
        const yearsDisplay = document.getElementById('span-year').innerHTML = '--';
        const monthsDisplay = document.getElementById('month-span').innerHTML = '--';
        const daysDisplay = document.getElementById('days-span').innerHTML = '--';
    } else if (monthInputEl.value === '') {
        const yearsDisplay = document.getElementById('span-year').innerHTML = '--';
        const monthsDisplay = document.getElementById('month-span').innerHTML = '--';
        const daysDisplay = document.getElementById('days-span').innerHTML = '--';
    } else if (yearInputEl.value === '') {
        const yearsDisplay = document.getElementById('span-year').innerHTML = '--';
        const monthsDisplay = document.getElementById('month-span').innerHTML = '--';
        const daysDisplay = document.getElementById('days-span').innerHTML = '--';
    } else if (dayInputEl.value > 31 && monthInputEl.value > 12 && yearInputEl.value > newYear) {
        const yearsDisplay = document.getElementById('span-year').innerHTML = '--';
        const monthsDisplay = document.getElementById('month-span').innerHTML = '--';
        const daysDisplay = document.getElementById('days-span').innerHTML = '--';
    } 
}

const submitBtnEl5 = document.getElementById('submit-button').addEventListener('click', ()=>{
    displayStaticText2();
});



function displayStaticText2() {

    const dayInputEl = document.getElementById('date-input');

    const monthInputEl = document.getElementById('month-input');
    
    const yearInputEl = document.getElementById('year-input');



    if (dayInputEl.value > 30 && monthInputEl.value === 4) {
        const yearsDisplay = document.getElementById('span-year').innerHTML = '--';
        const monthsDisplay = document.getElementById('month-span').innerHTML = '--months';
        const daysDisplay = document.getElementById('days-span').innerHTML = '--';
    } else if (dayInputEl.value > 30 && monthInputEl.value === 6) {
        const yearsDisplay = document.getElementById('span-year').innerHTML = '--';
        const monthsDisplay = document.getElementById('month-span').innerHTML = '--';
        const daysDisplay = document.getElementById('days-span').innerHTML = '--';
    } else if (dayInputEl.value > 30 && monthInputEl.value === 9) {
        const yearsDisplay = document.getElementById('span-year').innerHTML = '--';
        const monthsDisplay = document.getElementById('month-span').innerHTML = '--';
        const daysDisplay = document.getElementById('days-span').innerHTML = '--';
    } else if (dayInputEl.value > 30 && monthInputEl.value === 11) {
        const yearsDisplay = document.getElementById('span-year').innerHTML = '--';
        const monthsDisplay = document.getElementById('month-span').innerHTML = '--';
        const daysDisplay = document.getElementById('days-span').innerHTML = '--';
    }
}


function CalculateAge() {
    const dayInputEl = document.getElementById('date-input');

    const monthInputEl = document.getElementById('month-input');
    
    const yearInputEl = document.getElementById('year-input');
   
    const userDay = dayInputEl.value;
    const userMonth = monthInputEl.value;
    const userYear = yearInputEl.value;

    
    
    if (userDay > 30 && userMonth === 4) {
        document.getElementById('day-error-message').innerHTML = 'Must be a valid day';
        document.getElementById('day-error-message').style.color = 'Red';
        document.getElementById('month-error-message').innerHTML = '';
        document.getElementById('year-error-message').innerHTML = '';
    } else if (userDay > 30 && userMonth === 6) {
        document.getElementById('day-error-message').innerHTML = 'Must be a valid day';
        document.getElementById('day-error-message').style.color = 'Red';
        document.getElementById('month-error-message').innerHTML = '';
        document.getElementById('year-error-message').innerHTML = '';
    } else if (userDay > 30 && userMonth === 9) {
        document.getElementById('day-error-message').innerHTML = 'Must be a valid day';
        document.getElementById('day-error-message').style.color = 'Red';
        document.getElementById('month-error-message').innerHTML = '';
        document.getElementById('year-error-message').innerHTML = '';
    } else if (userDay > 30 && userMonth === 11) {
        document.getElementById('day-error-message').innerHTML = 'Must be a valid day';
        document.getElementById('day-error-message').style.color = 'Red';
        document.getElementById('month-error-message').innerHTML = '';
        document.getElementById('year-error-message').innerHTML = '';
    } else if (dayInputEl.value === '' && monthInputEl.value === '' && yearInputEl.value === '') {
        document.getElementById('day-error-message').innerHTML = 'Field is required';
        document.getElementById('day-error-message').style.color = 'Red';
        document.getElementById('month-error-message').innerHTML = 'Field is required';
        document.getElementById('month-error-message').style.color = 'Red';
        document.getElementById('year-error-message').innerHTML = 'Field is required';
        document.getElementById('year-error-message').style.color = 'Red';
        
    } 
    
    
    

    const userDateInput = `${userYear}-${userMonth}-${userDay}`;


    const userBirthDate = new Date(userDateInput);

    

    let dayDiff = new Date().getDate() - userBirthDate.getDate();
    let monthDiff = new Date().getMonth() - userBirthDate.getMonth();
    let yearDiff = new Date().getFullYear() - userBirthDate.getFullYear();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        dayDiff = 0;
        monthDiff = 0;
        yearDiff--;
    } else if (dayDiff < 0) {
        dayDiff = 0;
    }

    const yearsDisplay = document.getElementById('span-year').innerHTML = `${yearDiff}`;
    const monthsDisplay = document.getElementById('month-span').innerHTML = `${monthDiff}`;
    const daysDisplay = document.getElementById('days-span').innerHTML = `${dayDiff}`;

    //clearErrorMessage();
}



const submitBtnEl2 = document.getElementById('submit-button').addEventListener('click', ()=>{
    clearInputField();
});


function clearInputField() {
    const dayInputEl = document.getElementById('date-input');

    const monthInputEl = document.getElementById('month-input');
    
    const yearInputEl = document.getElementById('year-input');

    dayInputEl.value = '';
    monthInputEl.value = '';
    yearInputEl.value = '';
}




function clearErrorMessage() {
    
    document.getElementById('day-error-message').innerHTML = 'White';
    document.getElementById('day-error-message').style.color = 'White';
    document.getElementById('month-error-message').innerHTML = 'White';
    document.getElementById('month-error-message').style.color = 'White';
    document.getElementById('year-error-message').innerHTML = 'White';
    document.getElementById('year-error-message').style.color = 'White';
   
}




