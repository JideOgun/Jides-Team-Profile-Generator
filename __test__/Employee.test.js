
const Employee = require('../lib/Employee.js');

describe('Employee', () => {

test('creates an employee name, id, and email object',  () => {
    const employee = new Employee('Bob');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

});

test('gets employee name as an object', () => {
 const employee = new Employee('Bob');

 expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee Id as an object', () => {
 const employee = new Employee('Bob');

 expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email as an object', () => {
    const employee = new Employee('Bob');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('gets employee role and returns Employee', () => {
    const employee = new Employee('Bob');

    expect(employee.getRole()).toEqual('Employee');
});
