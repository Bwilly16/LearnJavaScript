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
console.log(myList);
