const inquirer = require('inquirer');

function Intern(school = '') {

this.school = school;
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


// function PromptInternQuestions (answers) {
//     return inquirer.prompt(
//   [  {
//       type: 'input',
//       name: 'name',
//       message: "What is the Intern's name?"
//     },
//     {
//       type: 'input',
//       name: 'email',
//       message: "What is the Intern's email address?"
//     },
//     {
//       type: 'input',
//       name: 'id',
//       message: "What is the Intern's employee id?"
//     },
   
//     {
//       type: 'input',
//       name: 'officenumber',
//       message: "What is the Intern's school?"
//     },
//   ]
//     );
//   }
    
//   PromptInternQuestions().then((answers) => {
//       // this.name = new Manager(name);
//       console.log(answers);
//     });




module.exports = Intern;