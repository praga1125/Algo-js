var twoSum = function (nums, target) {
  let hash = {}; // Initialize the hash table

  for (let i = 0; i < nums.length; i++) {
    const n = nums[i]; // Get the current number

    // Check if the complement of the current number exists in the hash table
    if (hash[target - n] !== undefined) {
      // If it exists, return the indices of the complement and the current number
      return [hash[target - n], i];
    }

    // Store the index of the current number in the hash table
    hash[n] = i;
  }

  // Return an empty array if no solution is found
  return [];
};

let num = [1, 2, 3, 4];
let target = 7;
let res = twoSum(num, target);
console.log(res);