let num: number = 10;

let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let any;
any = 10;
any = "a";

function render(document: any) {
  console.log(document);
}

let numbers: number[] = [1, 2, 3];
let number = [1, 2, 3];

let user: [number, string] = [1, "Sean"];
user[0].toPrecision;
user[1].toUpperCase;

user.push(1); // problematic

// const small = 1,
//   medium = 2,
//   large = 3;

enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);
