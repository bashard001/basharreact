const functions = require("firebase-functions");
const admin = require('firebase-admin');
const { response } = require("express");
const cors = require("cors")({origin: true})
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

var corsOptions = {
  origin: true,
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
exports.helloWorld = functions.https.onRequest((req, res)=>{

  res.header('Access-Control-Allow-Origin', '*')
  const number = Math.round(Math.random()* 100)
 
 console.log(req.body)
  
})

exports.testingF = functions.https.onCall((data, context) =>{
 
        console.log("inside the fun")
  return "hello world"

})