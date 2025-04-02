function PhuongTrinh(a,b,c) {
    if (a === 0) 
        throw new Error ("a khác 0")
    let delta = b * b - 4 * a * c;
    if (delta < 0 ) return [];
    if (delta === 0 ) return [-b /(2 * a)];

    let sqrtDelta = Math.sqrt(delta);
    return [(-b + sqrtDelta) / (2 * a) , (-b - sqrtDelta) / (2 * a)];
}

console.log(PhuongTrinh(1, -3, 2));
console.log(PhuongTrinh(1,2,1));
console.log(PhuongTrinh(1,0,1))