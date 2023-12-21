function rotateArray(arr, num) {
    let temp1 = arr.slice(-num);
    let temp2 = arr.slice(0, num);
    let res = temp1.concat(temp2)
    return res;
}


// In method using splice 

function rotateArray2(arr, num) {
    arr = arr.concat(arr.splice(0, num));
    console.log(arr);
}

let arr = [1, 2, 3, 4, 5, 7];
let num = 3;
let res = rotateArray(arr, num)
let res1 = rotateArray2(arr, num)
console.log(res);
console.log(res1);