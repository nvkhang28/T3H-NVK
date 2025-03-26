let a = [1,2,3,4,5,6,7,8,9,10]
let maxEven = -Infinity// gán cho là một số cực nhỏ

for(i = 0 ; i < a.length; i++){
    if(a[i] % 3 === 0 && a[i] > maxEven){
        maxEven = a[i]
    } 
}
console.log(maxEven)