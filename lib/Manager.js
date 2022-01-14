const inquirer = require('inquirer');

function Manager (name = '', email = '', id = '', officenumber = parseInt()) {
    this.officenumber = officenumber;

    this.name = name;
    this.email =  email;
    this.id = id;
}

Manager.prototype.getRole = function () {
    return {
        role: 'Manager'
    };
};


module.exports = Manager;