const Employee = require ('./Employee');
const index = require('../index');


class Engineer {
   constructor (name = '', github = '', email = '', id = '')
    {
    // super(name = '', github = '', email = '', id = '');
    
    this.github = github;
    this.name = name;
    this.email =  email;
    this.id = id;
    }
getGithub() {
     return this.github;
   
 }
getRole() {
     return 'Engineer';
 }
}
module.exports = Engineer;