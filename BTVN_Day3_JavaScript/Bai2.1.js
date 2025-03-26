//tìm những chuỗi có mảng giá trị là text
let a = [123, "apple" , true, 888, "nvk"];
let textValue = [];
 for (let i = 0 ; i < a.length; i++){
    if(typeof a[i] === "string"){
        textValue.push(a[i])
    }
 }
 console.log(textValue)