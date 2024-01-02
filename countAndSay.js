const countAndSay = (n) => {
  if (n === 1) {
    return "1";
  }

  let result = "1";

  for (let i = 2; i <= n; i++) {
    let next = [];
    let count = 1;

    for (let j = 1; j < result.length; j++) {
      if (result[j] === result[j - 1]) {
        count++;
      } else {
        next.push(count, result[j - 1]);
        count = 1;
      }
    }

    next.push(count, result[result.length - 1]);
    result = next.join("");
  }

  return result;
};

const n = 4;
const result = countAndSay(n);
console.log(result);
