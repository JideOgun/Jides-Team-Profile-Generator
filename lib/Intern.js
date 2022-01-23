const inquirer = require('inquirer');

class Intern{
constructor (school = '', name = '', email = '', id = '') {
this.school = school;
this.name = name;
this.email =  email;
this.id = id;  
}
getSchool() {
 return 'UTSA';

}
getRole() {
    return 'Intern';
}
}
module.exports = Intern;