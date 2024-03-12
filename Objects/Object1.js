//Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
};

var myDog = {
    "name": "Ben",
    "legs": 3,
    "tails": 2,
    "friends": []
};

//add new property to myDog
myDog.bark = "woof";

//remove property from object
delete myDog.bark; 
//console.log(myDog.bark);//return undefined

var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

var hatValue = testObj.hat;
var shirtValue = testObj.shirt;

//console.log(hatValue + " " + shirtValue);

var testObj1 = {
    "entree": "hamburger",
    "side": "veggies",
    "drink": "water"
};

var entreeValue = testObj1["entree"];
var drinkValue = testObj1["drink"];

//console.log(entreeValue + " " + drinkValue);


//using an object to look up values
function phoneticLookup(val){
    var result = 0;

    var lookup = {
        "alpha": 'adams',
        'bravo': "boston",
        'charlie': "chicago",
        'delta': "denver",
        'echo': "easy",
        'foxtrot': 'frank'
    };

    result = lookup[val];
    return result;
    //old code
    /*
    switch(val){
        case 'alpha':
            result = "adams";
            break;
        case 'bravo':
            result = "boston";
            break;
        case 'charlie':
            result = "chicago";
            break;
        case 'delta':
            result = 'denver';
            break;
        case 'echo':
            result = 'easy';
            break;
        case 'foxtrot':
            result = 'frank';
            break;
    }
    */
}

//console.log(phoneticLookup('charlie'));

var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
};

function checkObj(checkProp) {
   if(myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
   }
   else {
    return "Not Found";
   }
}

console.log(checkObj("hello"));