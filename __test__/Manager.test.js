const Manager = require('../lib/Manager');


test('Makes officenumber object', () => {
    const manager = new Manager('Brian');
    expect(manager.officenumber).toEqual(expect.any(Number));
});

test('gets role as an object and returns Manager', () => {
    const manager = new Manager('Brian');
    expect(manager.getRole()).toEqual(expect.any(String));
});