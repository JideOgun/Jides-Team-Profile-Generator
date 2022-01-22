



   const genManagerCard = (mgrInfo) => {
    if(!mgrInfo) {
        return '';
    }
    return `
    <section class="card mgr-info">
    <div>
    ${mgrInfo.name} <br>
    MANAGER 
    </div>
    <div>
    Office Number : ${mgrInfo.officenumber}
    </div>
    <div>
    Employee id: ${mgrInfo.id}
    </div>
    <div>
    Email : ${mgrInfo.email}
    </div>
    
    
    </section>
    
    
    `;
};

const genEngineerCard = (engrInfo) => {
    if(!engrInfo) {
        return '';
    }
    return `
    <section class="card engr-info">
    <div>
    ${engrInfo.name}
    ENGINEER
    </div>
    <div>
    ${engrInfo.github}
    </div>
    <div>
    Employee id: ${engrInfo.id}
    </div>
    <div>
    Email : ${engrInfo.email}
    </div>
    </section>
    `;
};

const genInternCard = (intInfo) => {
    if(!intInfo) {
        return '';
    }
    return `
    <section class="card int-info">
    <div>
    ${intInfo.name}
    INTERN
    </div>
    <div>
    Office Number: ${intInfo.officenumber}
    </div>
    <div>
    Employee Id: ${intInfo.id}
    </div>
    <div>
    Email: ${intInfo.email}
    </div>
    </section>
    `;
};





module.exports = templateData => {
    const { name, officenumber, id, github, school, teamArray } = templateData;
    console.log(templateData);

    var cardArr = [];

    for(var i = 0; i < templateData.length; i++) {
        
        const data = templateData[i];
        const data2 = templateData[i+1];
        const data3 = templateData[i+2];
        console.log(data2);
        const role = data.getRole();
        

        if(role == 'Manager') {
            const managerCard = genManagerCard(data);
            cardArr.push(data);
        } else if (role == 'Engineer') {
            const EngineerCard = genEngineerCard(data2);
            cardArr.push(data2);
        } else if (role == 'Intern') {
            const internCard = genInternCard(data3);
            cardArr.push(data3);
        }

        return `
        <!DOCTYPE html> 
        <html lang="en"> 
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>TEAM ROSTER</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        </head>
      
        <body>
        <div>
        <h1>MY TEAM</h1>
        </div>
          
         
      
          
          ${data.id}
          ${data.name}

          ${genManagerCard(data)}
          ${genEngineerCard(data2)}
          ${genInternCard(data3)}
         
          
         
         
          
      
      
          <h2><a href="https://github.com/">Github</a></h2>
        </body>
        </html>`;

    }

 
    
    


  
};

