function sumAll(x=-999){
    // 매개변수가 없으면 -999 return
    // 매개변수가 있으면 매개변수들의 합을 return
    let result = 0;
if(arguments.length==''){
result = -999;
}
else{
    for(var data of arguments){
        result += data;
}
}
return result;
}
// test
// console.log(sumAll());
// console.log(sumAll(1, 2));
// console.log(sumAll(1, 2, 3, 4, 5));