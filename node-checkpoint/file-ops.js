const fs = require('fs');

// Écriture dans welcome.txt
fs.writeFileSync('welcome.txt', 'Hello Node');

// Lecture de hello.txt
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur :', err);
    return;
  }
  console.log('Contenu de hello.txt :', data);
});
