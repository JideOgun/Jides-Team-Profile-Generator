const inquirer = require('inquirer');
function Engineer(github = '') {
    this.github = 'jideogun';
}



 Engineer.prototype.getGithub = function() {
     return {
         githubUsername: this.github,
     };
   
 };

 Engineer.prototype.getRole = function () {
     return {
         role: 'Engineer'
     };
 };


 function PromptEngineerQuestions (answer) {
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
      name: 'officenumber',
      message: "What is the Engineer's github username?"
    },
  ]
    );
  }
    
//   PromptEngineerQuestions().then((answer) => {
//       // this.name = new Manager(name);
//       console.log(answer);
//     });
  

module.exports = Engineer;