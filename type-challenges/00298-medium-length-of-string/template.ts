type StringToArray<S extends string> = S extends `${infer A}${infer B}` ? [A, ...StringToArray<B>] : []
type LengthOfString<S extends string> = StringToArray<S>['length']
//思想：想获取长度，就构建.length模式，数组就有length属性，那就构建数组
//1、将字符串转成数组（递归）
//2、直接数组.length获取