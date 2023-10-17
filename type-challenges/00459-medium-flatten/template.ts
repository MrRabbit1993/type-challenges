type Flatten<T extends Array<any>> = T extends [infer First, ...infer Other] ? [...First extends Array<any> ? Flatten<First> : [First], ...Flatten<Other>]:[]
// 思想：递归数组展开，然后放在一个新数组里面。需要判断每次取数组值是不是又是数组，是就不管，不是就扩展成数组，方便后面展开
//1、取数组第一个和剩余数组
//2、每次判断数组第一个是不是数组，是就不管，不是就构建数组，方便后续展开