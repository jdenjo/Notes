
let num = 0;


while(num <= 100){
    console.log("At num:", num);

    if (process.argv[2] === "half" && num >= 50){
        break;
    }

    num += 1;
}