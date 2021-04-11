const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Marist";
  const employee = new Intern("", 0, "test@email.com", testValue);
  expect(employee.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const employee = new Intern("", 0, "test@email.com", "Marist");
  expect(employee.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Marist";
  const employee = new Intern("", 0, "test@email.com", testValue);
  expect(employee.getSchool()).toBe(testValue);
});