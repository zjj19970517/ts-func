import { Except } from '.';

type isObject<T> = T extends Object ? true : false
type isNumber<T> = T extends Number ? true : false
type isArray<T> = T extends any[] ? true : false

type Result = Except<isObject<{}>>;
type Result1 = Except<isObject<''>>;
type Result2 = Except<isObject<[]>>;
type Result3 = Except<isObject<{}>>;

type Result10 = Except<isNumber<10>>;
// type Result11 = Except<isNumber<''>>; // Error: 类型“false”不满足约束“true”

type Result20 = Except<isArray<[]>>;
type Result21 = Except<isArray<['222']>>;
// type Result22 = Except<isArray<{}>>; // Error: 类型“false”不满足约束“true”
