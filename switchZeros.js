const switchZeros = (arr) => {
  let temp = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] == 0) {
     temp++;
    } else if (temp > 0) {
	            let t = arr[i];
	            arr[i]=0;
	            arr[i-temp]=t;
            }
  }
  return arr;
}

const arr = [1,2,3,0,0,10,2,3,0,1,8,0,9];
const res = switchZeros(arr);
console.log(res);