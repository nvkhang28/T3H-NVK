function TamGiac(a,b,c) {
    //điều kiện 3 cạnh thành tam giác
    return a + b > c && a + c > b && b + c > a
}
console.log(TamGiac(3,4,5))