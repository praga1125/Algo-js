const lengthOfLastWord = (s) => {
  let temp = s.trim().split(" ");
  return temp[temp.length - 1].length;
};

const s = "The world of love   ";
const res = lengthOfLastWord(s);
console.log(res);
