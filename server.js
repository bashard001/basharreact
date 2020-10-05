const express = require("express")
const app = express();
const nodemailer = require("nodemailer");


// Define a port to listen for incoming requests
var PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("./"));
//   }
app.use(express.static("./build"))

app.get("/", function(req, res){
  res.send("")
  })
app.post("/api/form", async function(req, res){
  console.log(req.body.contact.message)
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      auth: {
          user: 'constance.lueilwitz@ethereal.email',
          pass: 'gP1BwHDwSEX5aKRytj'
      }
    });
  
    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: `${req.body.contact.name} <${req.body.contact.email}>`, // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "From my website ✔", // Subject line
      text: `${req.body.contact.message}`, // plain text body
      html: `<b>${req.body.contact.message}</b>`, // html body
    });
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }
  
  main().catch(console.error);
})
// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
