var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
var CLASS_COLLECTION = "contacts";
var app = express();
var distDir = __dirname + "/dist/"
console.log(distDir);

app.use(express.static(distDir));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
// mongodb.MongoClient.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/contactdb", function (err, client) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }

//   // Save database object from the callback for reuse.
//   db = client.db();
//   console.log("Database connection ready");


// var server = app.listen(process.env.PORT ||8080, function() {
//     var port = server.address().port;
//     console.log("App now running on port", port);
// });
// });

var server = app.listen(process.env.PORT ||8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});

contacts = [


  {id: 1, name: "Contact 001", description: "Contact 001 des", email: "c001@email.com"},
  {id: 2, name: "Contact 002", description: "Contact 002 des", email: "c002@email.com"},
  {id: 3, name: "Contact 003", description: "Contact 003 des", email: "c003@email.com"},
  {id: 4, name: "Contact 004", description: "Contact 004 des", email: "c004@email.com"}
];
app.get("/api/contacts", function(req, res) {
    
    
    
  res.status(200).json(contacts);
    
  });

app.get("/api/contact/:id", function(req,res) {
  

});
  