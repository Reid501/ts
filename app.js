var person = {
    name: "Alex",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: [2, "author"]
};
person.role.push("admin");
person.role[1] = 10;
var favoriteActivites;
favoriteActivites = ["sports"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
