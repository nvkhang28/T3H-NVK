//tạo 2 dãy số d1 và d2 mỗi số trong dãy cách nhau bởi dấu "-"
let a = [1,3,5,7,9]
let b = [2,4,6,8,10,1,5,7,3,9]

let c = a.concat(b).join("-");
console.log(c) 

//kiểm tra xem d1 có nằm trong d2 ko 
let d = true;
for(let i = 0 ; i < a.length; i++){
    if(!b.includes(a[i])){
        d = false;
        break;
    }
}
console.log(d)