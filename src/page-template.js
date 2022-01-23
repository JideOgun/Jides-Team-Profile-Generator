
const genCards = (templateData) => {
    var cardArr = [];

    for(var i = 0; i < templateData.length; i++) {
        const employee = templateData[i];
        const role = employee.getRole();

        if(role === 'Manager') {
            const manCard = genManagerCard(employee);

            cardArr.push(manCard);
            console.log(cardArr);
        } else if (role === "Engineer") {
            const engrCard = genEngineerCard(employee);
            cardArr.push(engrCard);
        } else if (role === "Intern") {
            const intCard = genInternCard(employee);
            cardArr.push(intCard);
        }
    }
    return cardArr.join();
};


   const genManagerCard = (mgrInfo) => {
    if(!mgrInfo) {
        return '';
    }
    return `
    <section class="mgr-info">
    <div class="card mgr-card border-danger text-center" style="width: 18rem"> 
    <div>
    MANAGER <br>
    ${mgrInfo.name}
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
    </div>
    </section>
    `;
};

const genEngineerCard = (engrInfo) => {
    if(!engrInfo) {
        return '';
    }
    return `
    <section class="engr-info">
    <div class="card engr-card border-danger text-center" style="width: 18rem">
    <div>
    ENGINEER <br>
    ${engrInfo.name}
    
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
    </div>
    </section>
    `;
};

const genInternCard = (intInfo) => {
    if(!intInfo) {
        return '';
    }
    return `
    <section class="int-info">
    <div class="card int-card border-danger text-center" style="width: 18rem">
    <div>
    INTERN <br>
    ${intInfo.name}
    </div>
    <div>
    School: ${intInfo.school}
    </div>
    <div>
    Employee Id: ${intInfo.id}
    </div>
    <div>
    Email: ${intInfo.email}
    </div>
    </div>
    </section>
    `;
};


module.exports = templateData => {
    const [ manager, engineer, intern, ...teamArray ] = templateData;
    console.log(teamArray);
    
    for(var i = 0; i < templateData.length; i++) {
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
        <h1 class="team bg-danger text-center">MY TEAM</h1>
        </div> 
        ${genCards(templateData)}
        </body>
        </html>`;
    
    }

    
    
};

