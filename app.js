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
