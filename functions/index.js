const functions = require("firebase-functions");
const admin = require('firebase-admin');
const { response } = require("express");
admin.initializeApp();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((req, res)=>{

  res.header('Access-Control-Allow-Origin', '*')
  const number = Math.round(Math.random()* 100)
  console.log(req.body)
 res.send(number.toString())
  
})







// exports.testingF = functions.https.onCall((data, context) =>{


//   console.log(data)
// console.log("inside the fun")
//   return "hello world"
// })