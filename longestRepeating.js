const lengthOfLongestSubstring = function (s) {
  const lastSeen = {};
  let longest = [0, 1];
  let startIdx = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char in lastSeen) startIdx = Math.max(startIdx, lastSeen[char] + 1);
    if (longest[1] - longest[0] < i + 1 - startIdx) longest = [startIdx, i + 1];
    lastSeen[char] = i;
  }
  return s.slice(longest[0], longest[1]).length;
};

const str = "abcabcbb";
const res = lengthOfLongestSubstring(str);
console.log(res);
