const generateUser = user => {
  const userArray = user;

  return `
    <!DOCTYPE html>
    <html lang="en">
  
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>

    <body class="bg-light">
    <header class = "bg-tertiary">
      <h1 class = "page-title align-center text-light py-3">My Employees</h1>
    </header>

    <main class = "container">
      <div class="flex-row justify-space-between">
      ${generateCard(userArray)}
      </div>
    </main>
  </body>
  </html>
    `;
};

generateCard = userArray => {
  return`
  ${userArray
    .map(({ name, id, email, position, specific }) => {
      <div class="card">

  <header class="card-header">
    <h3 class="text-light text-center">${position}</h3>
  </header>
  
  <div class="card-body border">
    <p>${name}</p>
  </div>

  <div class="card-body border">
    <p>${email}</p>
  </div>

  <div class="card-body border">
    <p>${id}</p>
  </div>
  
  <footer class="border">
    <h5>${specific}</h5>
  </footer>
  
  </div>})}
  `
}

module.exports = generateUser;
