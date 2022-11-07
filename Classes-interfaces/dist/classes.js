"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.ficalYear = 2022;
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log("IT despartment - ID: ", this.id);
    }
}
class AccountingDepatment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass in a valid value!");
        }
        this.addReport(value);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepatment("d2", []);
        return this.instance;
    }
    addEmployee(name) {
        if (name === "Max") {
            return;
        }
        this.employees.push(name);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    describe() {
        console.log("accounting department ID: ", this.id);
    }
}
// const accounting = new AccountingDepatment("d1", []);
const accounting = AccountingDepatment.getInstance();
accounting.mostRecentReport = "Year end report";
console.log(accounting.mostRecentReport);
accounting.addReport("something went wrong");
accounting.printReports();
accounting.addEmployee("Max");
accounting.addEmployee("Alex");
accounting.printEmployeeInformation();
accounting.describe();
const employee1 = Department.createEmployee("Giv");
console.log(employee1, Department.ficalYear);
const it = new ITDepartment("d2", ["Max"]);
it.describe();
it.addEmployee("Max");
it.addEmployee("Manu");
it.printEmployeeInformation();
it.describe();
