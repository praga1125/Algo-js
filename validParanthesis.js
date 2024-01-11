const validParantheses = (str) => {
  const stack = [];
  const parantheses = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  for (let i = 0; i < str.length; i++) {
    if (str[i] in parantheses) {
      stack.push(str[i]);
    } else {
      if (parantheses[stack[stack.length - 1]] === str[i]) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return true;
};

const str = "{{[]}}";
validParantheses(str)
  ? console.log("It is Valid parantheses")
  : console.log("It is not valid parantheses");
