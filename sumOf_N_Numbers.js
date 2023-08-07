function sumOfNNumbers(value){
    let result = 0;
    if(value != 0){
        for(let i = 1; i < value; i++){
            result += i;
        }
    } else {
        console.log("enter the value must be greater than 0");
    }
    return result;
}


let sumOfNNumbers1 = (value) => {
    let result = 0;
    if(value != 0){
        for(let i = 1; i < value; i++){
            result += i;
        }
    } else {
        console.log("enter the value must be greater than 0");
    }
    return result;
}

console.log(`The sum of N numbers = `+sumOfNNumbers(10));
console.log(`The sum of N numbers = `+sumOfNNumbers1(20));