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
        [{
          type: 'confirm',
          name: 'employeeconfirm',
          message: 'Would you like to add employees to your team'
        },
        {
          type: 'checkbox',
          name: 'employees',
          message: 'Add Employees or finish building team',
          choices: ['Engineer', 'Intern'],
        }]
      );
    };

    const PromptEngineerQuestions = (engrData) => {
      return inquirer.prompt(
    [  {
        type: 'input',
        name: 'name',
        message: "What is the Engineer's name?",
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
        message: "What is the Engineer's email address?",
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
        message: "What is the Engineer's employee id?",
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
        message: "What is the Engineer's github username?",
        validate: engrgit => {
          if(engrgit) {
              return true;
          } else {
              console.log("Please enter the Engineer's github username!");
              return false;
          }
      }
      },
    ]).then(({name, github, email, id}) => {
        const engineer = new Engineer(name, github, email, id);
        console.log(engineer);
        teamArray.push(engineer);
      });
      
    };
    
    const PromptInternQuestions = (answers) => {
      return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: "What is the Intern's name?",
        validate: intname => {
          if(intname) {
              return true;
          } else {
              console.log("Please enter the Intern's name!");
              return false;
          }
      }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is the Intern's email address?",
        validate: intemail => {
          if(intemail) {
              return true;
          } else {
              console.log("Please enter the Intern's email!");
              return false;
          }
      }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is the Intern's employee id?",
        validate: intid => {
          if(intid) {
              return true;
          } else {
              console.log("Please enter theInterns id!");
              return false;
          }
      }
      },
     
      {
        type: 'input',
        name: 'school',
        message: "What is the Intern's school?",
        validate: intsch => {
          if(intsch) {
              return true;
          } else {
              console.log("Please enter the Interns school!");
              return false;
          }
      }
      },
    ]
    ).then(({name, school, email, id}) => {
      const intern = new Intern(name, school, email, id);
      console.log(intern);
      teamArray.push(intern);
    });
    
    
    };


    PromptManagerQuestions().then(PromptEmployeeOptions).then (({employees}) =>  {
     console.log(employees[0]);
     if(employees[0] === 'Engineer') {
     PromptEngineerQuestions().then(answer => {
      return generatePage(teamArray);
      
     }).then(HTMLpage => {
      return writeFile(HTMLpage);
  }).then(writeFileResponse => {
      console.log(writeFileResponse);
      return ;
  }).catch(err => {
      console.log(err);
});  
      }
    else if (employees[0] === 'Intern') {  
            PromptInternQuestions().then(answers => {
              return generatePage(teamArray);
            }).then(HTMLpage => {
              return writeFile(HTMLpage);
          }).then(writeFileResponse => {
              console.log(writeFileResponse);
              return ;
          }).catch(err => {
              console.log(err);
              });
            }
    
    else {
       return ;
     }
     });
     
    


