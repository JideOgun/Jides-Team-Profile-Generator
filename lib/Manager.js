const inquirer = require('inquirer');

function Manager (name = '', email = '', id = '', officenumber = '') {
    this.name = name;
    this.email =  email;
    this.id = id;
    this.officenumber = officenumber;
}

Manager.prototype.getRole = function () {
    return {
        role: 'Manager'
    };
};


module.exports = Manager;