type Trim<S extends string> = S extends `${' ' | '\n' | '\t'}${infer U}` | `${infer U}${' ' | '\n' | '\t'}` ? Trim<U> : S
//思想：
//运用递归，一次把一个匹配的字符给去掉，递归完成就会把所有满足的空格去掉
//考虑匹配左侧或者右侧来处理
