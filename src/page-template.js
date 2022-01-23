
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
    <section class="mgr-info container text-white">
    <div class="card mgr-card border-danger text-center" style="width: 18rem"> 
    <ul class="list-group list-group-flush">
    <li class="list-group-item bg-primary">
    MANAGER <br>
    ${mgrInfo.name}
    </li>
    <li class="list-group-item bg-dark">
    Office Number : ${mgrInfo.officenumber}
    </li>
    <li class="list-group-item bg-dark">
    Employee id: ${mgrInfo.id}
    </li>
    <li class="list-group-item bg-dark">
    Email : ${mgrInfo.email}
    </li>
    </ul>
    </section>
    `;
};

const genEngineerCard = (engrInfo) => {
    if(!engrInfo) {
        return '';
    }
    return `
    <section class="engr-info container text-white">
    <div class="card engr-card border-danger text-center" style="width: 18rem">
    <ul class="list-group list-group-flush">
    <li class="list-group-item bg-primary">
    ENGINEER <br>
    Name: ${engrInfo.name}
    </li>
    <li class="list-group-item bg-dark">
    Github: ${engrInfo.github}
    </li>
    <li class="list-group-item bg-dark">
    Employee id: ${engrInfo.id}
    </li>
    <li class="list-group-item bg-dark">
    Email : ${engrInfo.email}
    </li>
    </ul>
    </section>
    `;
};

const genInternCard = (intInfo) => {
    if(!intInfo) {
        return '';
    }
    return `
    <section class="int-info container text-white">
    <div class="card int-card border-danger text-center" style="width: 18rem">
    <ul class="list-group list-group-flush">
    <li class="list-group-item bg-primary">
    INTERN <br>
    ${intInfo.name}
    </li>
    <li class="list-group-item bg-dark">
    School: ${intInfo.school}
    </li>
    <li class="list-group-item bg-dark">
    Employee Id: ${intInfo.id}
    </li>
    <li class="list-group-item bg-dark">
    Email: ${intInfo.email}
    </li>
    </ul>
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

