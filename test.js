
var lengthOfLongestSubstring = function (s) {
  // 哈希集合，记录每个字符是否出现过
  const occ =new Set()
  const n = s.length;
  // 右指针，初始值为-1,相当于字符串左边界的左侧还没开始移动
  let rk = -1,ans = 0;
  for(let i=0;i<n;++i){
    if(i!== 0 ){
      // 左指针向右移动一格删除一个字符
      occ.delete(s.charAt(i-1))
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))){
      // 不断移动右指针
      occ.add(s.charAt(rk+1))
      ++rk;
    }
    // 低i到rk个字符是一个机场的无重复字符字串
    ans = Math.max(ans,rk-i+1)
  }
  return ans
}
// console.log(lengthOfLongestSubstring("abcabcbb"));

var getListLen = function (head) {
  let len = 0, cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }
  return len;
}
var getIntersectionNode = function (headA, headB) {
  let curA = headA, curB = headB,
    lenA = getListLen(headA),   // 求链表A的长度
    lenB = getListLen(headB);
  if (lenA < lenB) {       // 让curA为最长链表的头，lenA为其长度
    // 交换变量注意加 “分号” ，两个数组交换变量在同一个作用域下时
    // 如果不加分号，下面两条代码等同于一条代码: [curA, curB] = [lenB, lenA]
    [curA, curB] = [curB, curA];
    [lenA, lenB] = [lenB, lenA];
  }
  let i = lenA - lenB;   // 求长度差
  while (i-- > 0) {       // 让curA和curB在同一起点上（末尾位置对齐）
    curA = curA.next;
  }
  while (curA && curA !== curB) {  // 遍历curA 和 curB，遇到相同则直接返回
    curA = curA.next;
    curB = curB.next;
  }
  return curA;
};


var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i]
    }
  }
  console.log(nums);
  return k
};
// removeElement([3, 2, 2, 3],3)

function getMinPalindrome (str) {
  let arr = str.split("");
  let len = arr.length;
  let i = 0, j = len - 1;
  // 从左右两端开始比较字符，如果不同则将其替换为字典序更小的字符（即字符"a"-'z'）
  while (i < j) {
    if (arr[i] !== arr[j]) {
      let temp1 = arr.slice(0, i).concat(["a"], arr.slice(i + 1)); // 将左侧不同的字符替换为"a"
      let temp2 = arr.slice(0, j).concat(["a"], arr.slice(j + 1)); // 将右侧不同的字符替换为"a"
      let temp3 = arr.slice(0, i).concat(["a"], arr.slice(i + 1, j), ["a"], arr.slice(j + 1)); // 将左右两侧不同的字符都替换为"a"
      // 计算三种情况下的字典序，选择最小的一个
      let minStr = temp1.join("");
      if (temp2.join("") < minStr) {
        minStr = temp2.join("");
      }
      if (temp3.join("") < minStr) {
        minStr = temp3.join("");
      }
      return minStr;
    }
    i++;
    j--;
  }
  return str; // 如果原始字符串本身就是回文字符串，直接返回即可
}
console.log(getMinPalindrome("abcde"));


function getMaxEnemies (N, A, B, enemies) {
  enemies.sort((a, b) => a[0] - b[0]); // 按照横坐标从小到大排序
  let maxEnemies = 0;
  for (let i = 0; i < N; i++) {
    let j = i + 1;
    while (j < N && enemies[j][0] - enemies[i][0] <= A) {
      j++;
    }
    j--; // j指向滑动窗口的最右侧敌人
    let windowEnemies = enemies.slice(i, j + 1); // 滑动窗口内的敌人
    windowEnemies.sort((a, b) => a[1] - b[1]); // 按照纵坐标从小到大排序
    let k = 0, m = 1, count = 1;
    while (m < windowEnemies.length) {
      if (windowEnemies[m][1] - windowEnemies[k][1] <= B) {
        count++; // 统计滑动窗口内满足条件的敌人数量
        m++;
      } else {
        k++;
        if (k === m) {
          m++;
        }
      }
    }
    if (count > maxEnemies) {
      maxEnemies = count;
    }
  }
  return maxEnemies;
}
