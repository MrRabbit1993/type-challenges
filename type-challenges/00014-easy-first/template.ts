type First<T extends any[]> = T extends [infer R, ...infer rest] ? R : never
