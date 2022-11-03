"use strict";
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Alex",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };
// const ADMIN = 'Admin'
// const READ_ONLY = "read only"
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Alex",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: Role.ADMIN,
};
// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, 'test', 'test two'];
let favoriteActivites;
favoriteActivites = ["sports"];
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby);
}
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
