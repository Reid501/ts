"use strict";
const e1 = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("Alex", "Reid");
result.split(" ");
const fetchedUserData = {
    id: "u1",
    name: "Max",
    job: {
        title: "CEO",
        desciption: "My own company",
    },
};
console.log(fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job.title);
const userInput = null;
const storedData = userInput !== null && userInput !== void 0 ? userInput : "DEFAULT";
console.log(storedData);
function printEmployeeInformation(emp) {
    console.log("Name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Privileges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("Start Date: " + emp.startDate);
    }
}
printEmployeeInformation(e1);
class Car {
    drive() {
        console.log("driving...");
    }
}
class Truck {
    drive() {
        console.log("driving a truck....");
    }
    loadCargo(amount) {
        console.log("Loading cargo...", amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAniaml(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.groundSpeed;
    }
    console.log("Moving at speed: ", speed);
}
moveAniaml({ type: "bird", flyingSpeed: 30 });
// const userInputElement = <HTMLInputElement>(
//   document.getElementById("user-input")!
// );
const userInputElement = document.getElementById("user-input");
userInputElement.value = "Hi there!";
const errorBag = {
    email: "Not a valid email!",
    username: "Must start with a capital character!",
};
