type ReplaceAll<S extends string, From extends string, To extends string> =
  S extends '' ? '' :
  S extends `${infer K}${From}${infer O}` ? `${K}${From extends '' ? '' : To}${ReplaceAll<O, From, To>}` : S

  //思想，递归替换某一个
  //1、取出头（K）和匹配的位置（From）和尾巴(O)
  //2、递归执行尾巴来替换
  //3、需要考虑From为空，就直接不替换了