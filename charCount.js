const charCount = (str) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] != null) {
      obj[str[i]]++;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
};

const str = "helloworld";
const res = charCount(str);
console.log(res);
