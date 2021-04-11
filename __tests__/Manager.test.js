const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 1;
  const employee = new Manager("", 0, "test@email.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const employee = new Manager("", 0, "test@email.com", 1);
  expect(employee.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 1;
  const employee = new Manager("", 0, "test@email.com", testValue);
  expect(employee.getOfficeNumber()).toBe(testValue);
});
