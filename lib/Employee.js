
const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');





function Employee(name = '', id = parseInt(), email = '') {
  this.name = name;
  this.id = id;
  this.email = email;

}

Employee.prototype.getName = function () {
return {
name: this.name
};
};

Employee.prototype.getId = function() {
  return {
    id: `${this.id}`
  };
};

Employee.prototype.getEmail = function () {
  return {
    email: `${this.email}`
  };
};

Employee.prototype.getRole = function() {
  return {
    role: 'Employee'
  };
};





module.exports = Employee;