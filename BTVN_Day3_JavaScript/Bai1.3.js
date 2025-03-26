let a = [1,2,3,4,5,6,7,8,9,10]
let sum = 0; // khởi tạo tổng

for(let i = 0 ; i < a.length; i++){
    sum += a[i];
}
let mean = sum/ a.length;
console.log(mean)