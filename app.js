function greeting(name, callback){
    let sentence = 'Hello, my name is ' + name;

    let otherSentence = callback();

    return sentence + otherSentence;
}

function anotherGreeting(){
    let sentence = "I forget my last name";

    return sentence;
}

let myName = 'Mars';
console.log(greeting(myName, anotherGreeting));

// Exercise

function printArray(array, callback){
    for (let i = 0; i < array.length; i++){
        let item = array[i];
        console.log(item);
    }
    callback(array);
}

function printArrayAgain(array) {
    for (let i = 0; i < array.length; i++){
        let item = array[i];
        console.log(item);
    }
}

const numbers = [1,2,3,4,5,6];

printArray(numbers, printArrayAgain);

//Exercise

function calculator(num1, num2, callbackOne, callbackTwo){
    let result = callbackOne(num1, num2) + callbackTwo(num1, num2);
    return result;
}

function addNumbers(num1, num2){
    return (num1 + num2) ;
}

function subtractNumbers(num1, num2){
    return (num1 - num2);
}

console.log(calculator(5, 77, addNumbers, subtractNumbers));
