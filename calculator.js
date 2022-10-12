// create function for each operation: add, subtract, multiply and divide
// helper functions

operator = operator.toLowerCase()

function add(num1, num2){
return num1 + num2
}
//console.log(add(1,2))

function subtract(num1, num2){
    return num1 - num2
}

function multiply (num1, num2){
    return num1 * num2
}

function divide (num1, num2){
    return num1 / num2
}
//console.log(divide (1,2))

//create a function named operate that takes in 3 parameters: 
//2 numbers and the operation to be performed 

function operate(num1, num2, operator){
    if(operator === 'add'){
    return add(num1, num2)
}
else if(operator === 'subtract'){
return subtract(num1, num2)
}
else if (operator === 'multiply'){
    return multiply(num1, num2)
}
else if(operator === 'divide'){
    return divide(num1, num2)
}
else {
    return 'error operator not recognized'
}
}
//console.log(operate(1,2, 'add'))
//console.log(operate(1,2, 'subtract'))
//console.log(operate(1,2, 'multiply'))
//console.log(operate(1,2, 'divide'))