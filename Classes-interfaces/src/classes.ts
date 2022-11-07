abstract class Department {
  static ficalYear = 2022;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log("IT despartment - ID: ", this.id);
  }
}

class AccountingDepatment extends Department {
  private lastReport: string;
  private static instance: AccountingDepatment;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      return this.instance;
    }

    this.instance = new AccountingDepatment("d2", []);
    return this.instance;
  }

  addEmployee(name: string): void {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
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
