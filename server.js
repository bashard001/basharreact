const express = require("express")
const app = express();


// Define a port to listen for incoming requests
var PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("./"));
//   }
app.use(express.static("./build"))
app.get("/", function (req, res){
  res.send("hello")
})

app.post("/contactform.php", function(req, res){
res.send("ok")
})
// Start the API server
app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
