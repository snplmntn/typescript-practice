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

// tupples
let numbers: number[] = [1, 2, 3];
let number = [1, 2, 3];

let user: [number, string] = [1, "Sean"];
user[0].toPrecision;
user[1].toUpperCase;

user.push(1); // problematic

// const small = 1,
//   medium = 2,
//   large = 3;

// Enum
const enum Size {
  Small = 1,
  Medium,
  Large,
}

let mySize: Size = Size.Medium;
console.log(mySize);

// void return none
function calculateTax(income: number, taxYear = 2022) {
  if (taxYear <= 2022) return income * 1.2;
  return income * 1.3;
}
// console.log(calculateTax(10_000, 2022, 333)); Only 2 Args
console.log(calculateTax(10_000));
console.log(calculateTax(10_000, 2024));

let employee: {
  readonly id: number;
  // name?: string; // ? Makes it Optional
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "",
  retire: (date: Date) => {
    console.log(date);
  },
};
employee.name = "Sean";
// employee.id = 0; Cant because read only

// Type Aliases
type Employee = {
  readonly id: number;
  // name?: string; // ? Makes it Optional
  name: string;
  retire: (date: Date) => void;
};

let employee1: Employee = {
  id: 1,
  name: "Marc",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Union Type
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") return weight * 2.2;
  else return parseInt(weight) * 2.2;
}

console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));

// Intersection Type
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

// Type Intersection
let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal Types
// Literal Meaning (exact, specific value)
type Quantity = 50 | 100;
let quantity: Quantity = 50;

type Metric = "cm" | "inch";

// Nullable Types
function greet(name: string | null | undefined) {
  if (name) console.log(`Hola ${name.toUpperCase()}!`);
  else console.log("Hola!");
}

greet(null);
greet("Sean");
greet(undefined);

type Customer = {
  birthday?: Date;
};

function getCustomer(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(1);
// if (customer !== null && customer !== undefined) console.log(customer.birthday);

// Optional Property Access
console.log(customer?.birthday?.getFullYear);

// Optional Element Access Operator
// customers?.[0]

// Optional Call
let log: any = null;
log?.("a");
