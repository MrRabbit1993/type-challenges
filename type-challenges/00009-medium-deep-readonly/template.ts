type DeepReadonly<T> = {
  readonly [P in keyof T]: keyof T[P] extends never ? T[P] : DeepReadonly<T[P]>
}

// 思想 递归生成
// 1、考虑值类型如果不是never,说明可能还是对象