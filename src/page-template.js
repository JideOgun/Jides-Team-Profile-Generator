const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee.js');
const fs = require('fs');
const index = require('../index');


// const profileDataArgs = process.argv.slice(2, process.argv.length);

// const [name, github] = profileDataArgs;

module.exports = templateData => {
    // console.log(templateData);
    // const { firstname } = templateData;


  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>MY TEAM</h1>
    <div class='card'>Team Member 1</div>
    <div class='card'>Team Member 2</div>
    <div class='card'>Team Member 3</div>
    <div class='card'>Team Member 4</div>

    
    ${Intern.name}
    ${Engineer.github}
    ${Manager.officenumber}
   
   
    


    <h2><a href="https://github.com/">Github</a></h2>
  </body>
  </html>`;
};



// console.log(generatePage(name, github));



// fs.writeFile('index.html', generatePage(name, github), err => {
// if(err) throw err;

// console.log("Team Profile html complete. Check out index.html to see the output");
// });

// module.exports = generatePage;
