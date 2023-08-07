const numArr = [1, 2, 3, 4, 5, 6, 7];
const fruits = ["apple", "orange", "mango", "fig"];
const arrLen = numArr.length;  // It returns the length of array
console.log(`The length of array : ${arrLen}`);

const fruitsWithPrice = fruits.map((fruit) =>{   // This function returns array and we used for modifications
    return{name: fruit,
            price: 100};
    // return "It is "+fruit;
});
console.log(fruitsWithPrice);

const filteredArr = fruits.filter((fruit) => {  // This function returns the filtered array values 
    return fruit.length > 3;
});

console.log(filteredArr);

const students = [{name:"praga", age: 12, dept:"cs"}, {name:"praga1", age: 15, dept:"cse"}, {name:"praga2", age: 25, dept:"fcs"}];
const filterAr = students.filter((student) =>{ 
    return student.age >= 15;
});
console.log(filterAr);

const temp = students.find((student)=>{ // This function returns the first finded value in array
    return student.age >= 15;
});


const temp1 = students.slice(-2); // This function will cut the array with given index

console.log(fruits.includes("apple"));  // This function will check the value is include or not  and returns the boolean value

let isCompanyMailId = "abc@azentio.com".includes("@azentio.com");  
console.log(isCompanyMailId);