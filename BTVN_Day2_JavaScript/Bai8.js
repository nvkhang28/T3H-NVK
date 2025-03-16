let x = 22;
let y = 40;

if (x >= 0 && y <= 100 && x < y){
    while(x < y){
        console.log(`x = ${x}, y = ${y}`);
        x++; 
        y--; 
    }
}else{
    console.log("KO hopwj leej OK");
}