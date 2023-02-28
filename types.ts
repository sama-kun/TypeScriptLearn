import { type } from "os";

// Number
const num: number = 0;

// String
const str: string = "Hello world!!!";

// Boolean
const bool: boolean = true;

// Array of number
const arrNum: Array<number> = [1, 2, 3, 4];

// Array of any type
const arrAny: Array<any> = [1, 2, "2123", true];

// Class
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

// Interface
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Hayes",
  id: 0,
};

// Set a lot types
let id: string | number;

id = 1;
id = 'hello';

// Object
const obj: object = {
    name: 'Samgar',
    age: 19,
}

// Key word type
type Name = string;

const username: Name = '123';
// username = 123 | Error



// Enums
enum Direct{
  Up,
  Down,
  Right = 6,
  Left = 8
}

Direct.Up;
Direct.Down;
Direct[6];
Direct[8];


// Enum feature
enum links{
  vk = 'VK link',
  youtube = 'YouTube link',
  insta = 'Instagramm link'
}

links.vk;

console.log(num);
