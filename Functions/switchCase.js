//function to work with case statements
function caseInSwitch(val){
    var answer = "";
    switch(val) {
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        case 3: 
            answer = 'delta';
            break;
        case 4:
            answer = 'gamma';
            break;
    }
    return answer;
}

console.log(caseInSwitch(4));


//function when we want a default output when input is invalid
function switchOfStuff(val){
    var answer = "";
    switch(val){
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "Not a valid answer";
            break;
    }
    return answer;
}

console.log(switchOfStuff(4));


//funciton when multiple cases give same answer
function sequentialSizes(val) {
    var answer = "";
    switch(val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "High";
            break;
    }
    return answer;
}

//leanring to change if else statements to switch cases
function chainToSwitch(val) {
    var answer = "";

    /* Previous if else statments
    if (val == "bob"){
        answer = "Marley";
    }
    else if(val === 42){
        answer = "The answer"
    }
    etc...
    */

//new code to make it optimized
    switch(val){
        case "bob":
            answer = 'Marley';
            break;
        case 42:
            answer = 'The answer';
            break;
        case 1:
            answer = 'There is no number 1';
            break;
        case 99:
            answer = "the answer was missed by this much";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    return answer;
}