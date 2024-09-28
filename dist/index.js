"use strict";
function sum(u1, u2) {
    return u1.age + u2.age;
}
const sumages = sum({ name: "rui", age: 34 }, { name: "tht", age: 65 });
console.log(sumages);
