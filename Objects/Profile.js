var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "05467309876",
        "likes": ["pizza", "coding", "brownie points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "34574363252",
        "likes": ["hogwarts", "magic", "hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "09878676554",
        "likes": ["violin", "Intriguing Cases"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "934743637398",
        "likes": ["Javascript", "gaming", "dogs"]
    },
]

function lookUpProfile(name, prop){
    for(var i = 0; i < contacts.length; i++){
        if(contacts[i].firstName === name){
            return contacts[i][prop] || "No such property";
        }
    }
    return "No such contact";
}

var data = lookUpProfile("Sherlock", "ben");

console.log(data);