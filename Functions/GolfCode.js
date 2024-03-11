var names = ["Hole-in-One!", "Albatross", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Triple Bogey"];
function golfScore(par, strokes){
    if(strokes == 1){
        console.log(names[0]);
    }
    else if(strokes == 2 && par == 5){
        console.log(names[1]);
    }
    else if(strokes == 3 && par == 5){
        console.log(names[2]);
    }
    else if(strokes == 4 && par == 5){
        console.log(names[3]);
    }
    else if(strokes == 5 && par == 5){
        console.log(names[4]);
    }
    else if(strokes == 2 && par == 4){
        console.log(names[2]);
    }
    else if(strokes == 3 && par == 4){
        console.log(names[3]);
    }
    else if(strokes == 4 && par == 4){
        console.log(names[4]);
    }
    else{
        console.log("Greater than Par");
    }
    
}

//par 5
golfScore(5,2); //hio
/*
golfScore(5,2); //abl
golfScore(5,3); // eagle
golfScore(5,4); //bird
golfScore(5,5); //par
golfScore(5,6); //> par
*/
