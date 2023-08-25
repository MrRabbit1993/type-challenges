type MyCapitalize<S extends string> = S extends `${infer first}${infer rest}` ? `${Uppercase<first>}${rest}` : S
// 思想 用Uppercase把第一个字母变成大写
// 实现方式，把字符串第一个字符取出来，然后取出剩余的字符。然后把第一个大写，在拼接