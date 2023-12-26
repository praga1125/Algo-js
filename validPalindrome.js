const validPalindrome = (s) => {
  let newStr = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  return newStr.split("").reverse().join("") === newStr ? true : false;
};

const str = "A man, a plan, a canal: Panama";
const res = validPalindrome(str);
if (res) {
  console.log("It is valid palindrome");
} else {
  console.log("Its is not a valid Palindrome");
}
