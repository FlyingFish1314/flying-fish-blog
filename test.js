var isAnagram = function (s, t) {
  if (s.length !== t.length) return false
  let arr = new Array(26).fill(0)
  const base = "a".charCodeAt();
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt()-base]++
  }
  for (let i = 0; i < s.length; i++) {
    if (!arr[t[i].charCodeAt() - base]) return false
    arr[t[i].charCodeAt()-base]--
  }
  // for(let i=0;i<26;i++){
  //   if(arr[i]!==0) return false
  // }
  return true
};

// console.log(isAnagram("anagram","nagaraa"));
// console.log(!0);
var intersection = function (nums1, nums2) {
  if(nums1.length>nums2.length){
    [nums,nums2] = [nums2,nums1]
  }
  let set = new Set();
  for (let i = 0; i < nums1.length; i++) {
    set.add[nums1]
  }
  let arr = []
  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      arr.push(nums2[i])
      set.delete(nums2[i])
    }
  }
  return arr
};
// intersection()

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  let set = new Set();
  for (let i = 0; i < nums1.length; i++) {
    set.add(nums1[i])
  }
  let arr = []
  for (let i = 0; i < nums2.length; i++) {
    if (set.has(nums2[i])) {
      arr.push(nums2[i])
      set.delete(nums2[i])
      if (!set.size) return arr
    }
  }
  return arr
};

var intersection = function (nums1, nums2) {
  // 根据数组大小交换操作的数组
  if (nums1.length < nums2.length) {
    const _ = nums1;
    nums1 = nums2;
    nums2 = _;
  }
  const nums1Set = new Set(nums1);
  const resSet = new Set();
  // for(const n of nums2) {
  //     nums1Set.has(n) && resSet.add(n);
  // }
  // 循环 比 迭代器快
  for (let i = nums2.length - 1; i >= 0; i--) {
    nums1Set.has(nums2[i]) && resSet.add(nums2[i]);
  }
  return Array.from(resSet);
};

console.log(jsonStringify({a:1,b:2,c:{d:{e:5}}}));

function jsonStringify (obj) {
  let type = typeof obj;
  if (type !== "object") {
    if (/string|undefined|function/.test(type)) {
      obj = '"' + obj + '"';
    }
    return String(obj);
  } else {
    let json = [],
      arr = Array.isArray(obj),
      isNull = obj === null;
    for (let k in obj) {
      let v = obj[k],
        type = typeof v;
      if (/string|undefined|function/.test(type)) {
        v = '"' + v + '"';
      } else if (type === "object") {
        v = jsonStringify(v);
      }
      json.push((arr ? "" : '"' + k + '":') + String(v));
    }
    return (isNull ? "null" : (arr ? "[" : "{")) + String(json) + (arr ? "]" : "}");
  }
}


var fourSum = function (nums, target) {
  const len = nums.length;
  if (len < 4) return [];
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < len - 3; i++) {
    // 去重i
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < len - 2; j++) {
      // 去重j
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      let l = j + 1, r = len - 1;
      while (l < r) {
        const sum = nums[i] + nums[j] + nums[l] + nums[r];
        if (sum < target) { l++; continue }
        if (sum > target) { r--; continue }
        res.push([nums[i], nums[j], nums[l], nums[r]]);

        // 对nums[left]和nums[right]去重
        while (l < r && nums[l] === nums[++l]);
        while (l < r && nums[r] === nums[--r]);
      }
    }
  }
}
