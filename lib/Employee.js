
const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

class Employee {
  constructor (name = '', id = parseInt(), email = '') {
  this.name = name;
  this.id = id;
  this.email = email;

}

getName(){
return this.name;
}

getId () {
  return this.id;
}

getEmail() {
  return this.email;
}

getRole() {
  return 'Employee';
 
}
}
module.exports = Employee;