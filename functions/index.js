const functions = require('firebase-functions');
const admin = require('firebase-admin');



admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onCall((data, context) => {
  
  console.log(data);
  return "hit"
});