const productExceptSelf = (arr) => {
  let result = [];
  let flag = 0;
  const total = arr.reduce((prod, curr) => {
    if (curr !== 0) {
      return prod * curr;
    } else {
      flag = 1;
      return prod;
    }
  }, 1);

  for (let i = 0; i < arr.length; i++) {
    if (flag === 0) {
      if (arr[i] === 0) {
        result.push(0);
      } else {
        result.push(total / arr[i]);
      }
    } else {
      result.push(arr[i] === 0 ? total : 0);
    }
  }

  return result;
};

const arr = [-1, 1, 0, -3, 3];
const res = productExceptSelf(arr);
console.log(res);


// another version 


const productExceptSelf1 = (arr) => {
  const n = arr.length;
  const result = new Array(n).fill(1);

  let leftProduct = 1;
  let rightProduct = 1;

  for (let i = 0; i < n; i++) {
    result[i] *= leftProduct;
    leftProduct *= arr[i];
  }

  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= arr[i];
  }

  return result;
};
