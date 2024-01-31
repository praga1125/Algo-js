const plusMinus = (arr) => {
  let obj = { plus: 0, minus: 0, zero: 0 };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      obj.plus++;
    } else if (arr[i] == 0) {
      obj.zero++;
    } else {
      obj.minus++;
    }
  }
  obj.plus = obj.plus / arr.length;
  obj.minus = obj.minus / arr.length;
  obj.zero = obj.zero / arr.length;
  console.log(obj);
};

const arr = [-1, 2, -8, 0, -1, -10, 6];
const res = plusMinus(arr);
