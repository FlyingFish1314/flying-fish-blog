import{_ as i}from"./ValaxyMain.vue_vue_type_style_index_0_lang-8e683539.js";import{_ as y,c as F,w as e,o as D,a as l,b as s,d as a,r as t,e as d,p as A}from"./app-d437ec14.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-023ce13c.js";import"./YunCard.vue_vue_type_style_index_0_lang-d177144b.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-350ab47c.js";const U=JSON.parse('{"title":"反转链表","description":"","frontmatter":{"title":"反转链表","create":"2023-03-16T00:00:00.000Z","update":"2023-03-16T00:00:00.000Z","cover":"https://cdn.jsdelivr.net/gh/FlyingFish1314/chartbed/dog.jpg","categories":["算法","leetcode"],"tags":["链表","双指针","递归"]},"headers":[{"level":2,"title":"1.题目：206.反转链表","slug":"_1-题目：206-反转链表","link":"#_1-题目：206-反转链表","children":[]},{"level":2,"title":"题解","slug":"题解","link":"#题解","children":[{"level":3,"title":"1.双指针","slug":"_1-双指针","link":"#_1-双指针","children":[]},{"level":3,"title":"2.递归","slug":"_2-递归","link":"#_2-递归","children":[]}]},{"level":2,"title":"3.记录","slug":"_3-记录","link":"#_3-记录","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"pages/posts/算法/leetcode/206-反转链表.md","path":"/home/runner/work/flying-fish-blog/flying-fish-blog/pages/posts/算法/leetcode/206-反转链表.md","lastUpdated":1679288561000}'),r=JSON.parse('{"title":"反转链表","description":"","frontmatter":{"title":"反转链表","create":"2023-03-16T00:00:00.000Z","update":"2023-03-16T00:00:00.000Z","cover":"https://cdn.jsdelivr.net/gh/FlyingFish1314/chartbed/dog.jpg","categories":["算法","leetcode"],"tags":["链表","双指针","递归"]},"headers":[{"level":2,"title":"1.题目：206.反转链表","slug":"_1-题目：206-反转链表","link":"#_1-题目：206-反转链表","children":[]},{"level":2,"title":"题解","slug":"题解","link":"#题解","children":[{"level":3,"title":"1.双指针","slug":"_1-双指针","link":"#_1-双指针","children":[]},{"level":3,"title":"2.递归","slug":"_2-递归","link":"#_2-递归","children":[]}]},{"level":2,"title":"3.记录","slug":"_3-记录","link":"#_3-记录","children":[]},{"level":2,"title":"参考","slug":"参考","link":"#参考","children":[]}],"relativePath":"pages/posts/算法/leetcode/206-反转链表.md","path":"/home/runner/work/flying-fish-blog/flying-fish-blog/pages/posts/算法/leetcode/206-反转链表.md","lastUpdated":1679288561000}'),h={name:"pages/posts/算法/leetcode/206-反转链表.md",data(){return{data:r,frontmatter:r.frontmatter}},setup(){A("pageData",r)}},C={id:"_1-题目：206-反转链表",tabindex:"-1"},u=l("p",null,[l("strong",null,"实例1"),l("img",{src:"https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg",alt:"图片"})],-1),_=l("blockquote",null,[l("p",null,"输入：head = [1,2,3,4,5] 输出：[5,4,3,2,1]")],-1),f=l("p",null,[l("strong",null,"实例2"),l("img",{src:"https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg",alt:""})],-1),m=l("blockquote",null,[l("p",null,"输入：head = [1,2] 输出：[2,1]")],-1),g=l("p",null,[l("strong",null,"实例3")],-1),v=l("blockquote",null,[l("p",null,"输入：head = [] 输出：[]")],-1),b={id:"题解",tabindex:"-1"},k={id:"_1-双指针",tabindex:"-1"},E=l("div",{class:"language-JavaScript"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"var"),l("span",{style:{color:"#A6ACCD"}}," reverseList "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"function"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"head"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"!"),l("span",{style:{color:"#A6ACCD"}},"head"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"||"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"!"),l("span",{style:{color:"#A6ACCD"}},"head"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"next"),l("span",{style:{color:"#F07178"}},") "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"head"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#C792EA"}},"let"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"temp"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"null,"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"pre"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"null,"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"cur"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"head"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"while"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"cur"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#C792EA"}},"let"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"temp"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"cur"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"next"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#A6ACCD"}},"cur"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"next"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"pre"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#A6ACCD"}},"pre"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"cur"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#A6ACCD"}},"cur"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"temp"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"pre")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),l("span",{class:"line"})])])],-1),$={id:"_2-递归",tabindex:"-1"},B=l("div",{class:"language-JavaScript"},[l("span",{class:"copy"}),l("pre",{class:"shiki material-theme-palenight",tabindex:"0"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"var"),l("span",{style:{color:"#A6ACCD"}}," reverseList "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"function"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"head"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#82AAFF"}},"reverse"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"null,"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"head"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#C792EA"}},"var"),l("span",{style:{color:"#A6ACCD"}}," reverse  "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"function"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"pre"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"head"),l("span",{style:{color:"#89DDFF"}},"){")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"if"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"!"),l("span",{style:{color:"#A6ACCD"}},"head"),l("span",{style:{color:"#F07178"}},") "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"pre")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"temp"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"head"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"next"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#A6ACCD"}},"head"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#A6ACCD"}},"next"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"pre")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#A6ACCD"}},"pre"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"head"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#82AAFF"}},"reverse"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#A6ACCD"}},"pre"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}},"temp"),l("span",{style:{color:"#F07178"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"})])])],-1),x={id:"_3-记录",tabindex:"-1"},w=l("ul",null,[l("li",null,"2023-03-16 一刷")],-1),j={id:"参考",tabindex:"-1"};function N(o,S,T,V,c,J){const n=d,p=i;return D(),F(p,{frontmatter:c.frontmatter,data:c.data},{"main-content-md":e(()=>[l("h2",C,[s("1.题目："),a(n,{href:"https://leetcode.cn/problems/reverse-linked-list/",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("206.反转链表")]),_:1}),s(),a(n,{class:"header-anchor",href:"#_1-题目：206-反转链表","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),u,_,f,m,g,v,l("h2",b,[s("题解 "),a(n,{class:"header-anchor",href:"#题解","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),l("h3",k,[s("1.双指针 "),a(n,{class:"header-anchor",href:"#_1-双指针","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),E,l("h3",$,[s("2.递归 "),a(n,{class:"header-anchor",href:"#_2-递归","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),B,l("h2",x,[s("3.记录 "),a(n,{class:"header-anchor",href:"#_3-记录","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),w,l("h2",j,[s("参考 "),a(n,{class:"header-anchor",href:"#参考","aria-hidden":"true"},{default:e(()=>[s("#")]),_:1})]),l("ul",null,[l("li",null,[a(n,{href:"https://leetcode.cn/problems/reverse-linked-list/submissions/",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("leetcode-题目")]),_:1})]),l("li",null,[a(n,{href:"https://programmercarl.com/0206.%E7%BF%BB%E8%BD%AC%E9%93%BE%E8%A1%A8.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("代码随想录-文字题解")]),_:1})]),l("li",null,[a(n,{href:"https://www.bilibili.com/video/BV1nB4y1i7eL/?vd_source=e41aa098be39db11b1cd8422653114c6",target:"_blank",rel:"noreferrer"},{default:e(()=>[s("代码随想录-视频题解")]),_:1})])])]),"main-header":e(()=>[t(o.$slots,"main-header")]),"main-header-after":e(()=>[t(o.$slots,"main-header-after")]),"main-nav":e(()=>[t(o.$slots,"main-nav")]),"main-content":e(()=>[t(o.$slots,"main-content")]),"main-content-after":e(()=>[t(o.$slots,"main-content-after")]),"main-nav-before":e(()=>[t(o.$slots,"main-nav-before")]),"main-nav-after":e(()=>[t(o.$slots,"main-nav-after")]),comment:e(()=>[t(o.$slots,"comment")]),footer:e(()=>[t(o.$slots,"footer")]),aside:e(()=>[t(o.$slots,"aside")]),"aside-custom":e(()=>[t(o.$slots,"aside-custom")]),default:e(()=>[t(o.$slots,"default")]),_:3},8,["frontmatter","data"])}const M=y(h,[["render",N]]);export{U as __pageData,M as default};
