/**
 * 接收一个类型 T , 返回 T 类型 , T 必须为 true 
 */
export type Except<T extends true> = T;
export type ExpectTrue<T extends true> = T;

/**
 * 接收一个类型 T , 返回 T 类型 , T 必须为 false 
 */
export type ExpectFalse<T extends false> = T;

// 校验一个类型是否为 true 
export type IsTrue<T extends true> = T;
// 校验一个类型是否为 false
export type IsFalse<T extends false> = T;