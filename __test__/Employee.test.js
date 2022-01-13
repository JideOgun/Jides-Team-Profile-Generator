
const Employee = require('../lib/Employee.js');

describe('Employee', () => {

test('creates an employee name, id, and email object',  () => {
    const employee = new Employee('Bob');

    expect(employee.name).toBe('Bob');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

});

test('gets employee name as an object', () => {
 const employee = new Employee('Bob');

 expect(employee.getName()).toHaveProperty('name');
});

test('gets employee Id as an object', () => {
 const employee = new Employee('Bob');

 expect(employee.getId()).toHaveProperty('id');
});

test('gets employee emailas an object', () => {
    const employee = new Employee('Bob');

    expect(employee.getEmail()).toHaveProperty('email');
});

test('gets employee role and returns Employee', () => {
    const employee = new Employee('Bob');

    expect(employee.getRole()).toHaveProperty('role', 'Employee');
});
