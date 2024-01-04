function longestConsecutive(nums) {
    let numMap = {};
    let best = 0;

    // Populate numMap with true for each number in nums
    for (let num of nums) {
        numMap[num] = true;
    }

    for (let x of nums) {
        if (!numMap[x - 1]) {
            let y = x + 1;
            while (numMap[y]) {
                y++;
            }
            best = Math.max(best, y - x);
        }
    }

    return best;
}
