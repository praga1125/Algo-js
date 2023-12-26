const findOccurrence = (haystack, needle) => {
  let n = 0;
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[n]) {
      n++;
      if (n == needle.length) {
        return i - (n - 1);
      }
    } else {
      i = i - n;
      n = 0;
    }
  }
  return -1;
};

let haystack = "leetcodelet";
let needle = "el";
let result = findOccurrence(haystack, needle);
console.log(result);
