const Employee = require('./lib/Employee.js');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');


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
      }).then(PromptEmployeeOptions).then (({employees}) =>  {
     console.log(employees[0]);
     if(employees[0] === 'Engineer') {
      PromptEngineerQuestions = function (answer) {
        return inquirer.prompt(
      [  {
          type: 'input',
          name: 'name',
          message: "What is the Engineer's name?"
        },
        {
          type: 'input',
          name: 'email',
          message: "What is the Engineer's email address?"
        },
        {
          type: 'input',
          name: 'id',
          message: "What is the Engineer's employee id?"
        },
       
        {
          type: 'input',
          name: 'github',
          message: "What is the Engineer's github username?"
        },
      ]
        );
      };
        
      PromptEngineerQuestions().then(({name, github, email, id}) => {
          this.engineer = new Engineer(name, github, email, id);
          console.log(this.engineer);
        });
     }
     else if (employees[0] === 'Intern') {  
       PromptInternQuestions = function (answers) {
            return inquirer.prompt([
            {
              type: 'input',
              name: 'name',
              message: "What is the Intern's name?"
            },
            {
              type: 'input',
              name: 'email',
              message: "What is the Intern's email address?"
            },
            {
              type: 'input',
              name: 'id',
              message: "What is the Intern's employee id?"
            },
           
            {
              type: 'input',
              name: 'school',
              message: "What is the Intern's school?"
            },
          ]
          );
          };
            
          PromptInternQuestions().then(({name, school, email, id}) => {
              this.intern = new Intern(name, school, email, id);
              console.log(this.intern);
            });
     }
     else {
       return;
     }
     }
    );
    };

new Employee().initializeEmployee();
