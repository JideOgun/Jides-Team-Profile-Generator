const engineer = require('../lib/Engineer');
const intern = require('../lib/Intern');
const manager = require('../lib/Manager');
const inquirer = require('inquirer');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');





function Employee(name = '', id = '', email = '') {
  this.name;
  this.id;
  this.email;
  this.engineer = [];

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

Employee.prototype.initializeEmployee = function() {


function PromptManagerQuestions (answers) {
  return inquirer.prompt(
[  {
    type: 'input',
    name: 'name',
    message: "What is the team manager's name?"
  },
  {
    type: 'input',
    name: 'email',
    message: "What is the manager's email address?"
  },
  {
    type: 'input',
    name: 'id',
    message: "What is the manager's employee id?"
  },
 
  {
    type: 'input',
    name: 'officenumber',
    message: "What is the manager's office number?"
  }
]
  );
}

function PromptEmployeeOptions (employees) {
  return inquirer.prompt(
    {
      type: 'checkbox',
      name: 'employees',
      message: 'Add Employees or finish building team',
      choices: ['Engineer', 'Intern', 'Finish building team'],
    }
  );
}
  
PromptManagerQuestions().then(({name, email, id, officenumber}) => {
    this.manager = new Manager(name, email, id, officenumber);
    
    console.log(this.manager);
  }).then(PromptEmployeeOptions).then (employees =>  {
 console.log(employees);
 }
);
};





module.exports = Employee;