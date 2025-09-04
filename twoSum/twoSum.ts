// https://leetcode.com/problems/two-sum/description/

function twoSum(nums: number[], target: number): number[] {
  if (nums.length === 0) {
    return [];
  }

  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      const result = nums[i] + nums[j];
      if (result === target) {
        return [i, j];
      }
    }
  }

  return [];
}
