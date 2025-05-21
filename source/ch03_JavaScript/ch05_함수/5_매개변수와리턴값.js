console.log(pow(9, 3));
// 선언된 매개변수보다 많은 매개변수로 호출
console.log(pow(5, 2, 51, 41, 34, 20));
// 선언된 매개변수보다 적은 매개변수로 호출의 경우 전달되지 않는 파라미터는 undefined
console.log(pow(4));
console.log(pow());

function pow(x, y){
    // x의 y승을 return
    console.log('함수내의 x = ',x , 'y = ', y);
    var result = 1;
    for(let cnt=1 ; cnt<=y ; cnt++){
        result *=x; // result = result*x;
    }
    // return result;  return이 없으면 nudefined로 받음
}