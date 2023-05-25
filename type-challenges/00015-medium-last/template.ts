type Last<T extends any[]> = T extends [... infer R, infer K] ? K : never
