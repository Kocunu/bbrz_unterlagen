function maxOnes(nums) {
    let largestCount = 0;
    let currentCount = 0;
    for (let i = 0; i<nums.length; i++) {
        if (nums[i] === 0) {
            currentCount = 0;
        } else {
            currentCount++;
        };
        if (currentCount > largestCount) {
            largestCount = currentCount;
        }
    };
    return largestCount;
};

num = [1,0,0,1,1,1,0,0,1,1,1,1,1];
console.log(maxOnes(num));
