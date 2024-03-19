const telefonoExpReg = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;
const userInput=document.querySelector('#user-input')
const checkBtn=document.querySelector('#check-btn')
const clearBtn=document.querySelector('#clear-btn')
const resultsDiv=document.querySelector('#results-div')
;


function validatePhone() {
    if(userInput.value==''){
        alert('Please provide a phone number')

    }
    else if(!telefonoExpReg.test(userInput.value)){
        resultsDiv.innerText='Invalid US number: '+userInput.value+'\n'+resultsDiv.innerText
    }else{
        resultsDiv.innerText='Valid US number: '+userInput.value
    }
    userInput.value=''
}

function cleanTheScreen() {
    resultsDiv.innerText='' 
}

checkBtn.addEventListener('click', validatePhone)
clearBtn.addEventListener('click', cleanTheScreen)