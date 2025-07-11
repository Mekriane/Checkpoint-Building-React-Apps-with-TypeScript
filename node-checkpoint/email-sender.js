const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'TON_EMAIL@gmail.com',
    pass: 'TON_MOT_DE_PASSE_APP' // Utilise un mot de passe d'application sécurisé
  }
});

const mailOptions = {
  from: 'TON_EMAIL@gmail.com',
  to: 'TON_EMAIL@gmail.com',
  subject: 'Node.js Checkpoint',
  text: 'Ceci est un test d’envoi d’email avec Node.js et Nodemailer'
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log('Email envoyé : ' + info.response);
});

