const Engineer = require('../lib/Engineer');

test('makes an Engineer github object', () => {
    const engineer = new Engineer('Jide');

    expect(engineer.github).toBe('jideogun');
});

test('gets Engineer github as an object', () => {
    const engineer = new Engineer('Jide');

    expect(engineer.getGithub()).toHaveProperty('githubUsername');
});

test('gets role as an object and returns Engineer', () => {
    const engineer = new Engineer('Jide'); 

    expect(engineer.getRole()).toHaveProperty('role', 'Engineer');
});