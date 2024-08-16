var maxSubArray = function (nums) {
  // Initialize the variables
  let maxSum = nums[0];
  let currentSum = nums[0];

  // Iterate over the array starting from the second element
  for (let i = 1; i < nums.length; i++) {
    // Calculate the maximum sum ending at the current position
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    // Update the maximum sum found so far
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};
