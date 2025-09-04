// https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

function removeDuplicates(nums: number[]): number {
  let unique = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[unique]) {
      unique++;
      nums[unique] = nums[i];
      if (i + 1 === nums.length) break;
    }
    if (unique !== i) {
      delete nums[i];
    }
  }

  return unique + 1;
}
