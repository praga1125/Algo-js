function matrix(arr){
    let result = [];
    let diagonal1 = arr.map((value, index) => {
        return value[index];
    });
    let len = arr.length - 1;
    let diagonal2 = arr.map((value, index) => {
        return value[len-index];
    });
    result.push(diagonal1);
    result.push(diagonal2);
    return result;
}

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(`The Diagonal Matrix values are : ${matrix(arr)}`);