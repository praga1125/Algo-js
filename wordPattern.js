const wordPattern = (pattern, s) => {
  let arr = s.split(" ");
  if (arr.length != pattern.length) {
    return false;
  }
  let map1 = {};
  let map2 = {};
  for (let i = 0; i < pattern.length; i++) {
    let key = pattern[i];
    let value = arr[i];
    if (key in map1 || value in map2) {
      if (map1[key] !== value) return false;
      if (map2[value] !== key) return false;
    } else {
      map1[key] = value;
      map2[value] = key;
    }
  }
  return true;
};

const pattern = "abba";
const s = "dog cat cat dog";
const result = wordPattern(pattern, s);
console.log(result);

// another version

const wordPattern1 = (pattern, s) => {
  const words = s.split(" ");

  if (pattern.length !== words.length) {
    return false;
  }

  const charToWordMap = {};
  const usedWords = new Set();

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    const word = words[i];

    if (charToWordMap[char]) {
      if (charToWordMap[char] !== word) {
        return false;
      }
    } else {
      if (usedWords.has(word)) {
        return false;
      }
      charToWordMap[char] = word;
      usedWords.add(word);
    }
  }

  return true;
};

const pattern1 = "abba";
const s1 = "dog cat cat dog";
const result1 = wordPattern1(pattern, s);
console.log(result1);
