type MyReadonly2<T, K extends keyof T = keyof T> = Readonly<Pick<T, K>> & Omit<T, K>

// 思想:
// 1、考虑传递类型，类型为T的key，考虑到没传的时候，给默认值 typeof T
// 2、先将T中的K类型全部变为readonly类型
// 3、然后将T中不为K类型的用常规类型实现（用Omit来排除T中的K类型）