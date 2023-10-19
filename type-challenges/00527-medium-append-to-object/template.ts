type AppendToObject<T, U extends string, V> = {
  [P in keyof T | U] : P extends  keyof T ? T[P] : V
}

// 思想，构建一个扩展的Key，即U
// 根据Key是原对象还是新增的，来获取值