const path = require("path");
const router = require("express").Router();
const nodemailer = require("nodemailer");



// // API Routes
// router.route("/api/form").post(async function (req, res) {
//   console.log(req.body.contact.message)
//  async function main() {

//     // create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//       host: 'smtp-mail.outlook.com',
//       port: 587,
//       security: true,
//       auth: {
//         user: 'basharbodaseh@hotmail.com',
//         pass: 'Madison.08'
//       }
//     });

//     // send mail with defined transport object
//     let info = await transporter.sendMail({
//       from: `${req.body.contact.name} <basharbodaseh@hotmail.com>`, // sender address
//       to: "basharbodaseh@hotmail.com", // list of receivers
//       subject: `My website ✔ FROM ${req.body.contact.email}`, // Subject line
//       text: `${req.body.contact.message}`, // plain text body
//       html: `<b>${req.body.contact.message}</b>`, // html body
//     });

//     console.log("Message sent: %s", info.messageId);
//     // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

//     // Preview only available when sending through an Ethereal account
//     console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
//     // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
//     console.log(info.accepted[0])
//     res.send("ses")
    
//   }
  

//   main().catch(console.error);
  
// })



// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../build/index.html"))
);

module.exports = router;