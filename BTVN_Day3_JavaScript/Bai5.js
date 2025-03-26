let a = [1, 2, 3, 4, 5, 5, 7, 6, 8, 9, 10];
sum = 0 ;
for(let i = 0 ; i < a.length; i++){
    if(a[i] % 3 === 0){
        sum += a[i]
    }
}
console.log(sum)