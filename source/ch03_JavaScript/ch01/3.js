/* 변수 선언시 var(전역변수), let(지역변수), const(상수) */
sum = 0;
for (var i=1 ; i<=5 ; i++){
    sum += i;  // sum = sum+i; 1 + 2
}
console.log('for문 끝')
console.log('i =', i, '일때까지 누적합은 :', sum);

sum = 0;
for (let i=1 ; i<=5 ; i++){
    sum += i;  // sum = sum+i; 1 + 2
    console.log('i =', i, '일때까지 누적합은 :', sum);
}
console.log('for문 끝')
