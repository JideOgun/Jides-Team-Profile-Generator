const inquirer = require('inquirer');

class Manager  {
    constructor(name = '', email = '', id = '', officenumber = parseInt()){
    // super(name = '', email = '', id = '', officenumber = parseInt());

    this.officenumber = officenumber;
    this.name = name;
    this.email =  email;
    this.id = id;   
    }
getRole() {
    return 'Manager';
} 
}
module.exports = Manager;