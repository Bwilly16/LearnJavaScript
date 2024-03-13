// Creating Variables
var myName = 'Ben';

myName = 8;

let ourName = "LearningJavaScript";

const pi = 3.14;

var a = 9;

//Math

var sum = 10 + 5;
var subtract = 10 - 5;
var multiply = 5 * 3;
var divide = 10 / 5;

//console.log(sum, subtract, multiply, divide);

//Strings
var myFirstName = 'Ben';
var myLastName = 'Wilichowski';

//console.log(myFirstName + " " + myLastName);

var myStr = "They call me \"birdie ben\" instead of Ben sometimes";
var fixString = 'They call me "birdie ben" sometimes';
//console.log(myStr);
//console.log(fixString);

/****
escape characters
CODE OUTPUT
\'  single quote
\"  double quote
\\  backslash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed
*****/


//Find length of string
var firstNameLength = 0;
var firstName = 'Ben';

firstNameLength = firstName.length;
//console.log(firstNameLength);


//string immutability
var words = "hello";
words[0] = "j";
//console.log(words[0]);


var length1 = words.length;
//console.log(words[length1 - 1]);


//word function
function wordBlanks(myNoun, myAdjective, myVerb, myAdeverb){
    var result = '';
    result += "The " + myAdjective + " " + myNoun + " " + myVerb + " to the store " + myAdeverb;
    return result;
}

//console.log(wordBlanks('dog', 'big', 'ran', 'quickly'));


var myList = [['cereal', 3], ['milk', 1]];
//console.log(myList);


//var vs let/const
let catName = "quincy";
let quote;

catName = "beau";

function catTalk(){
    "use strict";

    catName = "Oliver";
    quote = catName + " Says meow1";
}

//Use arrow functions to write concise Anonymous Functions

const magic = () => new Date();

const myConcat = (arr1, arr2) => arr1.concat(arr2);

//higher order arrow functions
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
//console.log(squaredIntegers);


//Write higher order arrow functions
const increment = (function() {
    return function increment(number, value = 1){
        return number + value;
    };
})();
//console.log(increment(5,2));
//console.log(increment(5));

const sum1 = (function(){
    return function sum(...args){
        return args.reduce((a,b) => a + b, 0);
    }
})();
//console.log(sum1(1,2,3,4,5,6));

//use spread operator
const arr12 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr22;
(function(){
    arr22 = [...arr12];
    arr12[0] = 'potato';
})();
console.log(arr22);