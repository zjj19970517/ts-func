/**
 * 展示出当前类型的详细内容
 */
export type Debug<T> = {
  [K in keyof T]: T[K]
}