const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer'); 


admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});


let transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    auth: {
      user: 'basharbodaseh@hotmail.com',
      pass: 'Madison.08'
    }
  });

  exports.emailSender = functions.https.onCall((data, context) => {   
      
console.log(data)

//Returning result
let info = transporter.sendMail({
    from: `<basharbodaseh@hotmail.com>`, // sender address
    to: "basharbodaseh@hotmail.com", // list of receivers
    subject: `My website ✔ FROM`, // Subject line
    text: `cloud fun`, // plain text body
    html: `<b></b>`, // html body
  });
    return info
});

