type AppendArgument<Fn extends (...rest: any) => any, A> = (...rest: [...Parameters<Fn>, A]) => ReturnType<Fn>
// type AppendArgument<Fn, A> = Fn extends (...rest: infer U) => infer R ? (...rest: [...U, A]) => R : never


// 思想，要返回一个函数类型，就构造一个函数类型

// 方案一 ，直接来返一个函数类型，但是要约束FN必须是一个函数，即extend ()=>any
//1、返回值类型为原函数的返回类型，用ReturnType<Fn>取出来
//2、构造参数，FN的参数和A，构造成新参数，用Parameters<Fn>把原始参数取出来
//3、参数都需要做解构，类型也是


//方案二、基于infer来考虑，Fn是函数才做，否则不返回
//1、判断Fn是不是函数，是就返回函数，不是就never
//2、把Fn的参数拿出来，在加一个A
//3、返回值用Fn的值类型
