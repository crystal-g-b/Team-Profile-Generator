//to get a package json type npm init
///npm run test
//save dev dependencies
const Employee =require('../lib/Employee');

describe('Employee', () => {
    describe ('Initialization', () => {
        it('returns an object that is an instance of the Employee class when called with a new keywork')

        const employee = new Employee();
        expect(employee instanceof Employee).toBe(true);
    })

    it('it sets the name property based on constructor argument', () => {
        const name = "Giselle",
        const employee = new Employee(name);

        expect(employee.name).toBe(name);
    })
    it('it sets the name property based on constructor argument', () => {
        const id = 1,
        const employee = new Employee("", id);

        expect(employee.id).toBe(id);
    })
    it('it sets the name property based on constructor argument', () => {
        const email = 'test@email.com',
        const employee = new Employee("", 0, email);

        expect(employee.email).toBe(email);
    });
})

describe ('getName', ( )=> {

})

describe('getInfo', () => {

})