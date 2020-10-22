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

  exports.emailSender = functions.https.onRequest( async (req, res) => {   
      


//Returning result
let info = await transporter.sendMail({
    from: `<basharbodaseh@hotmail.com>`, // sender address
    to: "basharbodaseh@hotmail.com", // list of receivers
    subject: `My website ✔ FROM`, // Subject line
    text: ``, // plain text body
    html: `<b></b>`, // html body
  });
    return res.send('Email sent succesfully');
});

