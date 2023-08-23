type TrimLeft<S extends string> = S extends `${' ' | '\n' | '\t'}${infer U}` ? TrimLeft<U>:S
//思想：
//运用递归，一次把一个匹配的字符给去掉，递归完成就会把所有满足的空格去掉