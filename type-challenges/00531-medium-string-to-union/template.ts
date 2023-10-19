type StringToUnion<T extends string> = T extends '' ? never : T extends `${infer First}${infer Other}` ? First | StringToUnion<Other> : ""
//思想：递归操作字符串
//1、判断是不是空，空就never
//2、每次取第一个和后续的做拼接（递归）

