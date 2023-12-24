function reverseWordsWithoutSpace(str) {
  let words = str.trim().split(" ");
  words = words.filter((word) => word.length > 0);
  let reversedString = words.reverse().join(" ");
  return reversedString;
}

let temp1 = "a good   example";
console.log(reverseWordsWithoutSpace(temp1));
