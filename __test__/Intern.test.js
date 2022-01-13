const Intern = require('../lib/Intern');

test('makes an Intern school object', () => {
    const intern = new Intern('Jay');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets interns school as an object', () => {
    const intern = new Intern('Jay');

    expect(intern.getSchool()).toHaveProperty('school');
});

test('gets interns role as an object and returns Intern', () => {
    const intern = new Intern('Jay');

    expect(intern.getRole()).toHaveProperty('role', 'Intern');
});