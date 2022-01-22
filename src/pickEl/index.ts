/**
 * 从 T 类型中摘取出部分属性组合为一个新的类型
 * 同 TS 中提供的 Pick 方法
 */
export type PickEl<T, K extends keyof T> = {
  [P in K]: T[K]
}; 
