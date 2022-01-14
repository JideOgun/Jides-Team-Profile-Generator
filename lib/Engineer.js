const inquirer = require('inquirer');
function Engineer(name = '', github = '', email = '', id = '') {
    this.github = github;
    
    this.name = name;
    this.email =  email;
    this.id = id;
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



  

module.exports = Engineer;