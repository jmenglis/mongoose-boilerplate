// require our ORM
var mongoose = require('mongoose'); // our handy dandy ORM

// define what types our values should be
// using a Schema - this is similar declaring
// table columns etc using Migration

var tacoSchema = new mongoose.Schema({
  name: String,
  description: String,
  eatin: Boolean
});

// we export a Mongoose Model with the Schema
module.exports = mongoose.model("Taco", tacoSchema);
