type LookUp<U, T extends string> = {
  [P in T]: U extends { type: P } ? U : never
}[T]


// 解题思路--构造对象，然后取对象里面的某一个key
//1、基于T类型来创建key，比如 { dog : Dog }
//2、判断当前类型是否由{ type :xxx}继承而来，如果是就返回当前类型，不是就返回never
//3、对象取值，比如 {dog:Doa}[dog]