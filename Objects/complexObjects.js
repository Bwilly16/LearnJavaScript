var myMusic = [
    {
    "artist": "billy joel",
    "title": "piano man",
    "release_year": 1973,
    "formats": [
        "CD",
        "8T",
        'LP'
    ],
    "gold": true
    },
    {
        "artist": "beau carnes",
        "title": "cereal man",
        "release_year": 2003,
        "formats": [
            "youtube video"
        ]
    }
];

var access = myMusic[0].release_year;
//console.log(access);


//Record Collection
var collection = {
    "2548": {
        "album": "Slippery When Wet",
        "artist": "Bon Jovi",
        "tracks": [
            "let it rock",
            "you give love a bad name"
        ]
    },
    "2468": {
        "album": "1999",
        "artist": "Prince",
        "tracks": [
            "1999",
            "Little Red Corvette"
        ]
    },
    "1245": {
        "artist": "Robert Palmer",
        "tracks": []
    },
    "5439": {
        "album": "ABBA Gold",
    },
}

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value){
    if (value === ""){
        delete collection[id][prop];
    }
    else if(prop === "tracks"){
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    }
    else {
        collection[id][prop] = value;
    }

    return collection;
}
console.log(updateRecords(5439, "artist", "ABBA"));