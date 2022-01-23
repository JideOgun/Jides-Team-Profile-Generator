const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const { writeFile } = require('./utils/generate-site');

const fs = require('fs');
const generatePage = require('./src/page-template');


    const teamArray = [];

    const PromptManagerQuestions = () => {
      return inquirer.prompt(
    [  {
        type: 'input',
        name: 'name',
        message: "What is the team manager's name?",
        validate: nameInput => {
            if(nameInput) {
                return true;
            } else {
                console.log("Please enter the manager's name!");
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the manager's email address?",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter your email address!');
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the manager's employee id?",
        validate: numInput => {
            if(numInput) {
                return true;
            } else {
                console.log("Please enter the manager employee id!");
                return false;
            }
        }
      },
     
      {
        type: 'input',
        name: 'officenumber',
        message: "What is the manager's office number?",
        validate: officenoInput => {
            if(officenoInput) {
                return true;
            } else {
                console.log("Please enter the manager office number!");
                return false;
            }
        }
      }
    ]).then(({name, email, id, officenumber}) => {
      const manager = new Manager(name, email, id, officenumber);
      console.log(manager);
      teamArray.push(manager);
    })
    ;
    };
    
    const PromptEmployeeOptions = () => {

      return inquirer.prompt(
        [
        {
          type: 'list',
          name: 'employeeRole',
          message: 'Add Employees or finish building team',
          choices: ['Engineer', 'Intern'],
        },
        
        {
          type: 'input',
          name: 'name',
          message: "What is the Employee's name?",
          validate: engrname => {
            if(engrname) {
                return true;
            } else {
                console.log("Please enter the Engineer's name!");
                return false;
            }
        }
        },
        {
          type: 'input',
          name: 'email',
          message: "What is the Employee's email address?",
          validate: engremail => {
            if(engremail) {
                return true;
            } else {
                console.log("Please enter the Engineer's email!");
                return false;
            }
        }
        },
        {
          type: 'input',
          name: 'id',
          message: "What is the Employee's employee id?",
          validate: engrid => {
            if(engrid) {
                return true;
            } else {
                console.log("Please enter the Engineer's id!");
                return false;
            }
        }
        },
       
        {
          type: 'input',
          name: 'github',
          message: "What is the Employee's github username?",
          validate: engrgit => {
            if(engrgit) {
                return true;
            } else {
                console.log("Please enter the Engineer's github username!");
                return false;
            }
        }
        },
        {
          type: 'input',
          name: 'school',
          message: "What is the Intern's school?",
          when: (input) => input.employeeRole === 'Intern',
          validate: intsch => {
            if(intsch) {
                return true;
            } else {
                console.log("Please enter the Interns school!");
                return false;
            }
        }
        },
        {
          type: 'confirm',
          name: 'employeeConfirm',
          message: 'Would you like to add more employees to your team?',
          default: false
        },
      ]
      ).then((employeeInfo) => {
        let { employeeRole, name, id, email, github, school, employeeConfirm } = employeeInfo;

        let employee;

        if(employeeRole == 'Engineer') {
           employee = new Engineer(name, github, email, id);
          console.log(employee);
        } else if (employeeRole == 'Intern') {
           employee = new Intern(name, school, email, id);
          console.log(employee);
        }
        teamArray.push(employee);

        if(employeeConfirm) {
          return PromptEmployeeOptions(teamArray);
        }

      }) 
      ;
    };

    PromptManagerQuestions().then(PromptEmployeeOptions).then ((data) =>  {
      return generatePage(teamArray);
     }).then(HTMLpage => {
      return writeFile(HTMLpage);
  }).then(writeFileResponse => {
      console.log(writeFileResponse);
      return ;
  }).catch(err => {
      console.log(err);
});  
     
    


