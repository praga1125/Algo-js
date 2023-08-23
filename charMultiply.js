function checkStr(str){
    let temp = {};
    for(let i = 0; i < str.length; i++) {
        let checker = str[i].charCodeAt(0);
        if((checker >= 65 && checker <= 90) || (checker >= 97 && checker <= 122)) {
             temp[str[i]] = 0;
        } else if(checker >= 49 && checker <= 57) {
                temp[str[i-1]] = parseInt(str[i]) ;
        } else {
            return "Invalid Characters"
        }
    }
    return multiply(temp);
}  

function multiply(objects) {
    let result = "";
    for(const obj in objects){
        const count = objects[obj];
        result += obj.repeat(count);
    }
    return result;
}

let str = "a1b4cc7";
let result = checkStr(str);
console.log(result)