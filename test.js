
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
console.log(lengthOfLongestSubstring("abcabcbb"));
