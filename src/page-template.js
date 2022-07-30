const genCards = (templateData) => {
  var cardArr = [];

  for (var i = 0; i < templateData.length; i++) {
    const employee = templateData[i];
    const role = employee.getRole();

    if (role === "Manager") {
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
  if (!mgrInfo) {
    return "";
  }
  return `
    <section class="mgr-info text-white .col-md-4 .col-md-offset-4">
    <div class="card mgr-card border-danger text-center" style="width: 18rem"> 
    <ul class="list-group list-group-flush">
    <li class="list-group-item bg-primary">
    <i class="fas fa-mug-hot"></i> MANAGER <br>
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
    </div>
    </section>
    `;
};

const genEngineerCard = (engrInfo) => {
  if (!engrInfo) {
    return "";
  }
  return `
    <section class="engr-info text-white .col-md-4 .col-md-offset-4">
    <div class="card engr-card border-danger text-center" style="width: 18rem">
    <ul class="list-group list-group-flush">
    <li class="list-group-item bg-primary">
    <i class="fas fa-hard-hat"></i> ENGINEER <br>
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
    </div>
    </section>
    `;
};

const genInternCard = (intInfo) => {
  if (!intInfo) {
    return "";
  }
  return `
    <section class="int-info text-white .col-md-4 .col-md-offset-4">
    <div class="card int-card border-danger text-center" style="width: 18rem">
    <ul class="list-group list-group-flush">
    <li class="list-group-item bg-primary">
    <i class="fas fa-graduation-cap"></i> INTERN <br>
    Name: ${intInfo.school}
    </li>
    <li class="list-group-item bg-dark">
    School: ${intInfo.name}
    </li>
    <li class="list-group-item bg-dark">
    Employee Id: ${intInfo.id}
    </li>
    <li class="list-group-item bg-dark">
    Email: ${intInfo.email}
    </li>
    </ul>
    </div>
    </section>
    `;
};

module.exports = (templateData) => {
  const [manager, engineer, intern, ...teamArray] = templateData;
  console.log("this the team " + teamArray);

  for (var i = 0; i < templateData.length; i++) {
    return `
        <!DOCTYPE html> 
        <html lang="en"> 
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <title>TEAM ROSTER</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
          <script src="https://kit.fontawesome.com/520e30761b.js" crossorigin="anonymous"></script>
        </head>
      
        <body>
        <div>
        <h1 class="team bg-danger text-center text-white p-3">MY TEAM</h1>
        </div> 
        <div class="container">
        <div class="row">


        ${genCards(templateData)}

        </div>
        </div>
        </body>
        </html>`;
  }
};
