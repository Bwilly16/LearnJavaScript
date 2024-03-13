var voxel = {
    x: 3.6, 
    y: 7.4, 
    z: 6.54
};

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const { 
    x : a,
    y : b,
    z : c
} = voxel;

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
    "use strict";

    const { tomorrow : tempOfTomorrow } = avgTemperatures;

    return tempOfTomorrow;
}

//console.log(getTempOfTmrw(AVG_TEMPERATURES));

const LOCAL_FORECAST = {
    today: { min: 72, max: 83},
    tomorrow: { min: 73.3, max: 84.6}
};

function getMaxOfTmrw(forcast){
    "use strict";

    const { tomorrow : { max : maxOfTomorrow }} = forcast;

    return maxOfTomorrow;
}

//console.log(getMaxOfTmrw(LOCAL_FORECAST));

//destructing to assign variables
const [z1,x1, , y1] = [1, 2, 3, 4, 5, 6];
//console.log(z1,x1, y1);

let a1 = 8, b1 = 6;
(() => {
    "use strict";
    [a1,b1] = [b1,a1];

})();
//console.log(a1);
//console.log(b1);

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
    const [, ,...arrr] = list;
    return arrr;
}
const arrr = removeFirstTwo(source);
//console.log(arrr);
//console.log(source);

//Use deconstructing assignment to pass an object as a functions parameter
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function() {

    return function half({ max, min }) {
        return (max + min) / 2.0;
    };
})();
//console.log(stats);
//console.log(half(stats));

//create string using template literal
const person = {
    name: "ben",
    age: 22
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

//console.log(greeting);

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr){
    const resultDisplayArray = [];
    for(let i = 0; i<arr.length; i++){
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li`);
    };
    return resultDisplayArray;
}

//console.log(makeList(result.failure));

function makeClass() {
    class vegtable{
        constructor(name){
            this.name = name;
        }
    }
    return vegtable;
}
const Vegtable = makeClass();
const carrot = new Vegtable('Carrot');
//console.log(carrot.name);


class Book {
    constructor(author){
        this._author = author;
    }
    //getter
    get writer(){
        return this._author;
    }
    //setter
    set writer(updatedAuthor){
        this._author = updatedAuthor;
    }
}

function makeClass() {
    class Thermostat {
        constructor(temp){
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp; // now in celcius
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
    }
    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);