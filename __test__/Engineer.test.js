const Engineer = require('../lib/Engineer');

test('makes an Engineer github object', () => {
    const engineer = new Engineer('Jide');

    expect(engineer.github).toEqual(expect.any(String));
});

test('gets Engineer github as an object', () => {
    const engineer = new Engineer('Jide');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('gets role as an object and returns Engineer', () => {
    const engineer = new Engineer('Jide'); 

    expect(engineer.getRole()).toEqual(expect.any(String));
});