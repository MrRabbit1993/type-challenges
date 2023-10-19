 type Merge<F, S> = { [P in keyof F | keyof S]: P extends keyof S? S[P]: P extends keyof F? F[P]: never }

 // 思想：基于key来扩展，要考虑两个对象相同key的情况，后者的key覆盖前者。所以要先判断后者对象