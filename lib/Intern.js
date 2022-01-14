const inquirer = require('inquirer');

function Intern(school = '', name = '', email = '', id = '') {

this.school = school;

this.name = name;
this.email =  email;
this.id = id;
}

Intern.prototype.getSchool = function () {
 return {
     school: 'UTSA'
 };

};


Intern.prototype.getRole = function () {
    return {
        role: 'Intern'
    };
};



module.exports = Intern;