type Replace<S extends string, From extends string, To extends string> =
  S extends '' ? S :
  S extends `${infer first}${From}${infer rest}` ?
  `${first}${From extends '' ? '' : To}${rest}` : S

  // 解体思想：将需要替换的文字给处理掉（需要考虑替换掉的为空，就不替换）
  // 1、考虑字符串是空的，则直接返回S。S extends '' ? S :其他逻辑
  // 2、组合需要替换的字符串 S extends `${infer first}${From}${infer rest}` 然后替换From
  // 3、这里需要考虑From是空字符串了，如果是空，直接返回空 From extends '' ? '' : To