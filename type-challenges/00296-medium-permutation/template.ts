
type Permutation<T, K = T> = [T] extends [never] ? [] : K extends K ? [K, ...Permutation<Exclude<T, K>>] : never

//思想：分发条件类型（Distributive Conditional Types）
//https://ts.yayujs.com/handbook/ConditionalTypes.html#%E5%9C%A8%E6%9D%A1%E4%BB%B6%E7%B1%BB%E5%9E%8B%E9%87%8C%E6%8E%A8%E6%96%AD-inferring-within-conditional-types
/**
 *      type ToArray<Type> = Type extends any ? Type[] : never;
 *      type StrArrOrNumArr = ToArray<string | number>;
        // type StrArrOrNumArr = string[] | number[]
 */


//  简单来说，传入给T extends U中的T如果是一个联合类型A | B | C，则这个表达式会被展开成
// (A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y)



//   [T] extends [never] 而不是 T extends never 因为  T是联合类型，分发条件类型分配得到的是一个联合类型  不符合期望