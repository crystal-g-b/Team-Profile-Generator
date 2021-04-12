const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
  const testValue = "Marist";
  const intern = new Intern("", 0, "test@email.com", testValue);
  expect(intern.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const intern = new Intern("", 0, "test@email.com", "Marist");
  expect(intern.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Marist";
  const intern = new Intern("", 0, "test@email.com", testValue);
  expect(intern.getSchool()).toBe(testValue);
});