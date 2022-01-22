import { Debug } from '.';

interface Person {
  name: string;
  age: number;
  sex: string;
}

const obj = {
  name: 'zjj',
  age: 25
}

type Obj = typeof obj;

type Result = Debug<Obj>;
type Result1 = Debug<Person>;