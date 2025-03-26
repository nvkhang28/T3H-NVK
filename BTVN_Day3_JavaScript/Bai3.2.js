let a = [1, 3, 5, 6, 8, 9, 12];
let b = [2, 3, 4, 5, 6, 7, 10];
let c = [];

// Duyệt mảng a để lấy số chẵn
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
        c.push(a[i]); // Thêm số chẵn vào mảng c
    }
}

// Duyệt mảng b để lấy số chẵn
for (let i = 0; i < b.length; i++) {
    if (b[i] % 2 === 0) {
        c.push(b[i]); // Thêm số chẵn vào mảng c
    }
}

// In kết quả
console.log("Mảng mới gồm các số chia hết cho 2:", c);
