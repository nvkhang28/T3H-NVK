let a = [" Nguyen Van Khang", "apple" , "waterseven"]
let minString = a[0]; //giả sử đây là chuổi nhỏ nhất
for(let i = 0 ; i < a.length; i++){
    if(a[i].length < minString.length){
        minString = a[i]    
    }
}
console.log(minString)