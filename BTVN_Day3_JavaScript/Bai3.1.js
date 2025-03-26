// Kiểm tra xem có phần tử nào trong d2 chia hết cho tổng của d1 không.
let a = [ 2, 4,];
let b = [8, 16, 27, 36, 89];

// Tính tổng của d1
let suma = 0;
for (let num of a) {
    suma += num;
}

let c = false;

// Kiểm tra từng phần tử trong d2
for (let num of b) {
    if (num % suma === 0) {
        console.log(`${num} chia hết cho tổng a (${suma})`);
        c = true;
    }
}

// Nếu không tìm thấy số nào thỏa mãn
if (!c) {
    console.log(`Không có số nào trong d2 chia hết cho tổng của d1 (${suma})`);
}
