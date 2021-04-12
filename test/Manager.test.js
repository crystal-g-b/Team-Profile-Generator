const Manager = require("../lib/Manager");

test("Can set office number via constructor argument", () => {
  const testValue = 1;
  const manager = new Manager("", 0, "test@email.com", testValue);
  expect(manager.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const manager = new Manager("", 0, "test@email.com", 1);
  expect(manager.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 1;
  const manager = new Manager("", 0, "test@email.com", testValue);
  expect(manager.getOfficeNumber()).toBe(testValue);
});
