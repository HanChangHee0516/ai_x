console.log(pow(9,2));
console.log(pow(5));
console.log(pow());

function pow(x=1, y=2){
    // x의 y승을 return
    var result = 1;
    for(let cnt=1 ; cnt<=y ; cnt++){
        result *=x; // result = result*x;
    }
    return result;
}
