let w = 50;
let h = 1.75;

let bmi = w / (h * h);

console.log(` Chỉ số BMI: ${bmi.toFixed(2)}`);

if (bmi < 18.5) {
    console.log("Nhẹ cân");
} else if (bmi >= 18.5 && bmi < 23) {
    console.log("Bình thường");
} else if (bmi >= 23 && bmi < 25) {
    console.log("Thừa cân");
} else {
    console.log("Béo phì");
}