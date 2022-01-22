import { PickEl } from '.';

interface Person {
  name: string;
  age: string;
  sex: string;
}

type result = PickEl<Person, 'age' | 'name'>;