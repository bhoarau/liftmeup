const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const models = require("./models");

const passport = require("passport");
const session = require('express-session');

var fs = require('fs');
var Schema = mongoose.Schema;
var multer = require('multer');

// Configure body parser for AJAX requests
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// Serve up static assets
app.use(express.static("client/build"));

 // For Passport
app.use(session({ secret: 'changeThis',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
require('./config/passport.js')(passport,models.User);

// app.use(multer({ dest: "./uploads/",
// 		rename: function (fieldname, filename) {
// 		  return filename;
// 		},
// 	   }));

// 	app.post("/api/photo",function(req,res){
// 		var newImage = new Item();
// 		newImage.img.data = fs.readFileSync(req.files.userPhoto.path)
// 		newImage.img.contentType = "image/png";
// 		newImage.save(); 
// 	   });

// Add routes, both API and view
const routes = require("./routes")(passport);
app.use('/',routes);


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
//add mongo heroku uri
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/liftmeup-development"
);

// Start the API server
app.listen(PORT, function() {
  console.log("🌎  ==> API Server now listening");
});