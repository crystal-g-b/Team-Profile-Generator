//to get a package json type npm init
///npm run test
//save dev dependencies
const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe ('Initialization', () => {
        it('returns an object that is an instance of the Employee class when called with a new keywork', () => {

            const employee = new Employee();
            expect(employee instanceof Employee).toBe(true);
        })

        it('it sets the name property based on constructor argument', () => {
            const name = "Crystal";
            const employee = new Employee(name);

            expect(employee.name).toBe(name);
        })
        it('it sets the id property based on constructor argument', () => {
            const id = 10;
            const employee = new Employee("", id);

            expect(employee.id).toBe(id);
        })
        it('it sets the email property based on constructor argument', () => {
            const email = 'test@email.com';
            const employee = new Employee("", 0, email);

            expect(employee.email).toBe(email);
        })
    })


    describe ('getName', () => {
        it("Can get name via getName()", () => {
            const name = "Crystal";
            const employee = new Employee(name);

            expect(employee.getName()).toBe(name);
        })
    })

    describe('getId', () => {
        it("Can get id via getId()", () => {
            const id = 10;
            const employee = new Employee("Crystal", id);

            expect(employee.getId()).toBe(id);
        })
    })

    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const email = "test@email.com";
            const employee = new Employee("Crystal", 10, email);

            expect(employee.getEmail()).toBe(email);
        })
    })

    describe("getRole", () => {
        it("getRole() should return \"Employee\"", () => {
            const role = 'Employee';
            const employee = new Employee("Crystal", 10, "test@email.com");
            expect(employee.getRole()).toBe(role);
        })
    })
})