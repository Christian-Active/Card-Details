let submit = document.getElementById('confirm')
let inputName = document.getElementById("card-name")
let inputNumber = document.getElementById("card-number")
let inputMonth = document.getElementById("card-month")
let inputYear = document.getElementById("card-year")
let cardCvc = document.getElementById("card-cvc")
let username = document.getElementById("name")
let month = document.getElementById("month")
let year = document.getElementById("year")
let backCvc = document.getElementById("back-cvc")
let bankNumber = document.getElementById("bank-no")
let input = document.getElementById("input")
let inputs = document.querySelectorAll("input")
let complete = document.getElementById("complete")
let numberInputs = document.getElementsByClassName("number")

function error(input, message){
    let formControl = input.parentElement
    let error = formControl.querySelector("small")
    error.textContent = message
}
function success(input){
    let formControl = input.parentElement
    let error = formControl.querySelector("small")
    error.textContent = ""
}
function ifFilled(){
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].value == ""){
            error(inputs[i], "Required")
        }else{
            success(inputs[i]) 
        }
    }
}

submit.addEventListener("click", function(){
    ifFilled();
    if(inputName.value != ''){
        username.textContent = inputName.value
    }
    for(let i = 0; i < numberInputs.length; i++){
    if(isNaN(Number(numberInputs[i].value))){
        error(numberInputs[i], "Invalid")
    }else if(Number(numberInputs[i].value)){
        formValidation()
    }}
})
window.addEventListener("DOMContentLoaded", function(){
    inputs.forEach(input => {
    input.value = "" 
 })
})
function formValidation(){
    // Update Bank Card
    if(inputNumber.value != "" && inputNumber.value.length < 16){
        error(inputNumber, "The number must be 16 digits")
    }else{
        let cat1 = inputNumber.value.slice(0, 4)
        let cat2 = inputNumber.value.slice(4, 8)
        let cat3 = inputNumber.value.slice(8, 12)
        let cat4 = inputNumber.value.slice(12, 16)
        bankNumber.textContent = cat1 + " " + cat2 + " " + cat3 + " " + cat4
    }
    if(inputMonth.value != "" && inputMonth.value > 12){
         error(inputMonth, "Invalid")
    }else if(inputMonth.value != "" && inputMonth.value < 1){
        error(inputMonth, "Invalid")
    }else{
        month.textContent = inputMonth.value
    }
    if(inputYear.value != "" && inputYear.value < 22){
        error(inputYear, "Invalid")
    }else{
        year.textContent = inputYear.value
    }
    if(cardCvc.value != "" && cardCvc.value.length < 3){
        error(cardCvc, "Your CVC must be 3 digits")
    }else{
        backCvc.textContent = cardCvc.value
    }
}

