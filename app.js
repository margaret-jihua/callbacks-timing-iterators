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


// make a superHero function

function superHero(callbackOne, callbackTwo){
    let result = callbackOne() + " and " + callbackTwo();
    return result;
}

function superPower1(){
    return "light speed";
}

function superPower2(){
    return "time travel";
}

console.log(superHero(superPower1,superPower2));


///////Timeing Function

function blastOff(){
    let num = 0;

    for (let i = 10; i >= num; i--){
        console.log(i);
    }
    console.log('Blast OFF!!');
}

setTimeout(blastOff,5000);


//exercise
function printName(name){
    console.log(name);
}

let myNametwo = "Margaret";
setTimeout(function(){
    printName(myNametwo);
},3000);


//////////iterators!!!

//forEach

const fruits = ['apple', 'pear', 'coconut','pineapple'];

fruits.forEach(function(element){
    console.log(element);
})

fruits.forEach(element => {
    console.log(element);
})

//map

const someNumbers = [34, 55, 23, 99];

const addFive = someNumbers.map(element => {
    return element +5;
})

console.log(addFive);


//filter
const filterNum = someNumbers.filter(element => {
    if (element > 50){
        return element;
    }
})

console.log(filterNum);