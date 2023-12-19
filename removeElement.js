
let removeElement = function(nums, val) {
    let result = nums.map(i => {
        return i == val ? '_' : i;
    });
    return (result);
};
let arr = [1, 2, 3, 2, 3, 5]
console.log(removeElement(arr, 2));