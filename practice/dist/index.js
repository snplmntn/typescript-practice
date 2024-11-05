"use strict";
let num = 10;
let sales = 123_456_789;
let course = "TypeScript";
let is_published = true;
let any;
any = 10;
any = "a";
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3];
let number = [1, 2, 3];
let user = [1, "Sean"];
user[0].toPrecision;
user[1].toUpperCase;
user.push(1);
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear = 2022) {
    if (taxYear <= 2022)
        return income * 1.2;
    return income * 1.3;
}
console.log(calculateTax(10_000));
console.log(calculateTax(10_000, 2024));
let employee = {
    id: 1,
    name: "",
    retire: (date) => {
        console.log(date);
    },
};
employee.name = "Sean";
let employee1 = {
    id: 1,
    name: "Marc",
    retire: (date) => {
        console.log(date);
    },
};
function kgToLbs(weight) {
    if (typeof weight === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
console.log(kgToLbs(10));
console.log(kgToLbs("10kg"));
let textBox = {
    drag: () => { },
    resize: () => { },
};
let quantity = 50;
function greet(name) {
    if (name)
        console.log(`Hola ${name.toUpperCase()}!`);
    else
        console.log("Hola!");
}
greet(null);
greet("Sean");
greet(undefined);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer?.birthday);
//# sourceMappingURL=index.js.map