var lengthOfLongestSubstring = function (s) {
  // 哈希集合，记录每个字符是否出现过
  const occ = new Set();
  const n = s.length;
  // 右指针，初始值为-1,相当于字符串左边界的左侧还没开始移动
  let rk = -1,
    ans = 0;
  for (let i = 0; i < n; ++i) {
    if (i !== 0) {
      // 左指针向右移动一格删除一个字符
      occ.delete(s.charAt(i - 1));
    }
    while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
      // 不断移动右指针
      occ.add(s.charAt(rk + 1));
      ++rk;
    }
    // 低i到rk个字符是一个机场的无重复字符字串
    ans = Math.max(ans, rk - i + 1);
  }
  return ans;
};
// console.log(lengthOfLongestSubstring("abcabcbb"));

var getListLen = function (head) {
  let len = 0,
    cur = head;
  while (cur) {
    len++;
    cur = cur.next;
  }
  return len;
};
var getIntersectionNode = function (headA, headB) {
  let curA = headA,
    curB = headB,
    lenA = getListLen(headA), // 求链表A的长度
    lenB = getListLen(headB);
  if (lenA < lenB) {
    // 让curA为最长链表的头，lenA为其长度
    // 交换变量注意加 “分号” ，两个数组交换变量在同一个作用域下时
    // 如果不加分号，下面两条代码等同于一条代码: [curA, curB] = [lenB, lenA]
    [curA, curB] = [curB, curA];
    [lenA, lenB] = [lenB, lenA];
  }
  let i = lenA - lenB; // 求长度差
  while (i-- > 0) {
    // 让curA和curB在同一起点上（末尾位置对齐）
    curA = curA.next;
  }
  while (curA && curA !== curB) {
    // 遍历curA 和 curB，遇到相同则直接返回
    curA = curA.next;
    curB = curB.next;
  }
  return curA;
};

var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k++] = nums[i];
    }
  }
  console.log(nums);
  return k;
};
// removeElement([3, 2, 2, 3],3)

// async function async1(){
//   console.log('aaa'); //2
//   await async2()
//   console.log('bbb'); //6
// }
// async function async2(){
//   console.log('ccc'); //3
// }
// setTimeout(()=>{
//   console.log('ddd'); //8
// },0)
// console.log('fff'); //1
// async1()
// new Promise((resolve,reject)=>{
//   console.log('ggg'); //4
//   resolve()
// }).then((res)=>{
//   console.log('hhh');//7
// })
// console.log('iii'); //5

let tree = [
  {
    id: 1,
    name: "北京",
    children: [
      {
        id: 2,
        name: "河南",
        children: [{ id: 3, name: "新乡", children: [] }],
      },
    ],
  },
  {
    id:4,
    name:"郑州",
    children:[]
  }
];

function getNameById(tree,id){
  let newTree  = faltTree(tree)
  return newTree[id].name
}
function faltTree(tree,re ={}){
  if(!Array.isArray(tree) || tree.length === 0) return re
  tree.forEach((item)=>{
    const children = item.children;
    delete item.children
    re[item.id] = item
    faltTree(children,re)
  })
  return re
}
// console.log(getNameById(tree, 1));

