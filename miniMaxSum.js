function miniMaxSum(arr) {
        let min = 0;
        let max = 0; 
    for(let i = 0; i < arr.length; i++){
        if(i > 0){
            max += arr[i];
        } 
        if(i < arr.length-1){
            min += arr[i];
        }
    }
    console.log(min,max);
}

const arr = [1,2,3,4,5];
miniMaxSum(arr);