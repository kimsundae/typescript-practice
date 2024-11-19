let boolean: boolean
let falseBoolean: boolean = false;

let number: number
let integer:number = 6
let float: number = 1.2345
let string: string
let firstName: string = 'Doe';

// Array
// 한가지 타입만 가지는 배열
let names1: string[] = ['John', 'Kim']
let names2: Array<string> = ['John', 'Kim'];

let array1: (string | number)[] = ['John', 1, 2];
let array2: Array<string | number> = ['John', 1, 2];

let someArray: any[] = ['John', 1, [], {}, false];

let stringArray : readonly string[] = ['A', 'B'];
let numberArray: ReadonlyArray<number> = [1, 2];

// stringArray.push('C');
// numberArray[0] = 3;

let tuple1: [string, number];
tuple1 = ['a',1];;
// tuple1 = ['a', 1, 2]
// tuple1 = [1, 'a']

let users: [number, string][]
users = [[1,'John'], [2,'Doe']]

let tuple2: [string, number]
tuple2= ['a',1]
tuple2.push(2)
console.log(tuple2);

let any: any = 'abc';
any = 1;
any= [];

let unknown: unknown = false;
// let string1: string = unknown;
let string2: boolean = unknown as boolean;

let obj: object = {};
let arr: object = [];
let nul: object = null;
let date: object = new Date();

const obj1: {id: number, title: string, description: string} = {
  id: 1,
  title: 'title1',
  description: 'description1'
}

let union: (string | number)
union = 'hi';
union = 123;
union = [];

let func1: (arg1:number, arg2:number) => number;
func1 = function(x,y){
  return x * y
}

let func2: () => void;
func2 = function (){
  console.log('hi');
}

let number1: number = undefined
