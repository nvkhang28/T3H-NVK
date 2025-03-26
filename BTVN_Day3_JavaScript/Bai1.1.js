// Tìm số nhỏ nhất mà chia hết cho 2 trong mảng
let a = [1,2,3,4,5,6,7,8,9,10]
let minEven = Infinity;
for(i = 0 ; i < a.length; i++){
    if(a[i] % 2 === 0 && a[i] < minEven){
        minEven = a[i]; // cập nhật số nhỏ nhất chia hết cho 2
    }
}
if (minEven === Infinity){
    console.log("Ko có số chẵn trong mảng")
}else{
    console.log("số nhỏ nhất chia hết cho 2:", minEven)
}