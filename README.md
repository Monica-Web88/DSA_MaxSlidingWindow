# 🪟 Sliding Window Maximum
A JavaScript solution for tracking the largest value inside a fixed-size window as it slides across an array — using a **Monotonic Deque**.

---

## 📌 Problem Statement
Given an array of numbers and a window size `k`, find the maximum value inside every window of size `k` as it slides from the start of the array to the end.

### Example
```javascript
Input:
nums = [1,3,-1,-3,5,3,6,7], k = 3

Output:
[3,3,5,5,6,7]
```

---

## 🔤 What is a Sliding Window?
A **sliding window** is a fixed-size range of indices that moves forward by one position at a time across the array.

### Example
```text
[1,3,-1,-3,5,3,6,7], k = 3

Window 1: [1,3,-1]        → max = 3
Window 2: [3,-1,-3]       → max = 3
Window 3: [-1,-3,5]       → max = 5
Window 4: [-3,5,3]        → max = 5
Window 5: [5,3,6]         → max = 6
Window 6: [3,6,7]         → max = 7
```

---

## 🧠 Algorithm
1. Create an empty deque `q` to store **indices**, and an empty array `res` for results.
2. Loop through every index `i` in `nums`.
3. If the index at the front of the deque has fallen outside the window (`q[0] === i - k`), remove it from the front.
4. While the value at the back of the deque is **less than or equal to** the current value, remove it from the back — it can never be the max again.
5. Push the current index `i` onto the back of the deque.
6. Once the window has grown to size `k` (`i >= k - 1`), the front of the deque holds the index of the max — push `nums[q[0]]` into `res`.
7. Return `res`.

---

## 💻 Code
```javascript
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
```

---

## 📊 Complexity Analysis
Let:
* `n` = number of elements in `nums`

### Time Complexity
Each index is pushed onto the deque **once** and popped **at most once**, from either end:
```text
O(n)
```

### Overall Time Complexity
```text
O(n)
```

---

## 💾 Space Complexity
The deque holds at most `k` indices, and the result array holds `n - k + 1` values.

```text
O(k)
```
where:
* `k` = window size

---

## 📋 Complexity Summary

| Approach              | Time     | Space   |
| ---------------------- | -------- | ------- |
| Brute Force             | O(n × k) | O(1)    |
| Monotonic Deque         | **O(n)** | **O(k)** |
