const functions = require("firebase-functions");
const admin = require('firebase-admin');
admin.initializeApp();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((req, res)=>{

  res.header('Access-Control-Allow-Origin', '*')
  
    res.send('Hello World from function!');
  
})

// exports.testingF = functions.https.onCall((data, context) =>{


//   console.log(data)
// console.log("inside the fun")
//   return "hello world"
// })