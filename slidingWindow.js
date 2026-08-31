/** 
Problem Statement: Track the absolute largest scalar inside a constantly moving window sequence
**/

function maxSlidingWindow(nums, k) 
{
  let q = [], res = [];
  for (let i = 0; i < nums.length; i++) 
  {
    if (q.length && q[0] === i - k) 
        q.shift();
    while (q.length && nums[q[q.length - 1]] <= nums[i]) 
        q.pop();
    q.push(i);
    if (i >= k - 1) 
        res.push(nums[q[0]]);
  }
  return res;
}


console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));
// Expected: [3,3,5,5,6,7]

console.log(maxSlidingWindow([4,2,12,11], 1));
// Expected: [4,2,12,11]

console.log(maxSlidingWindow([9,11,-1,3], 4));
// Expected: [11]

console.log(maxSlidingWindow([5,5,5,5,5], 2));
// Expected: [5,5,5,5]

console.log(maxSlidingWindow([-4,-2,-8,-1,-9], 2));
// Expected: [-2,-2,-1,-1]