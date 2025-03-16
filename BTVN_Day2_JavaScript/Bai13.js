let n = 5;
let s = 0;

for(let i = 1; i <= n ; i++){
    s += 1 / (i * (i + 1))
}
console.log(`${s}`)