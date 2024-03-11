function ourReusableFunction(){
    console.log('Hello World!');
}

ourReusableFunction();


function doSomeMath(math1, math2){
    var sum = 0;
    sum = math1 + math2;
    console.log(sum);
}

//doSomeMath(6,7);

//Global Scopes
var myGlobal = 10;

function fun1(){
    var oopsGlobal=5;
}


function fun2() {
    var output = '';
    if (typeof myGlobal != 'undefined'){
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != 'undefined'){
        output += ' oopsGlobal: ' + oopsGlobal; //wont work cause oopsGlobal has var tag
    }
    console.log(output);
}
//fun1();
//fun2();

//Example function
function nextInLine(arr, item){
    //my way:
    var size = arr.length;
    arr[arr.length] = item;

    return arr.shift();
}
var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));



