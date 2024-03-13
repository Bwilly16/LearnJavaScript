function checkEqual(a,b){
    /*
    if(a === b){
        return true;
    }
    else {
        return false;
    }
    */
  // return a === b ? true : false;

   return a === b;
}
checkEqual(1,2);

function checkSign(num){
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(10));
console.log(checkSign(-10));
console.log(checkSign(0));